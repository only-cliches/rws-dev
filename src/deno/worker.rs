use std::time::UNIX_EPOCH;
use deno_core::{ModuleId, ZeroCopyBuf, error::anyhow, json_op_sync};
use deno_core::url::Url;
use deno_core::error::AnyError;
use crate::deno::metrics::*;
use deno_core::{ModuleSpecifier};
use std::{env, sync::Arc, time::SystemTime};
use std::rc::Rc;
use crate::ROOT_DIR;
use deno_core::{GetErrorClassFn, JsErrorCreateFn, JsRuntime};
use deno_core::RuntimeOptions;
use std::{fs, path::{Path, PathBuf}};
use crate::deno::*;
use deno_core::serde_json;
use deno_core::serde_json::json;
use std::task::Context;
use std::task::Poll;
use deno_core::futures::future::poll_fn;
use rand::prelude::*;
use deno_core::error::*;
use rand::prelude::*;

lazy_static! {
    static ref COMPILER_RUNTIME_JS: String = String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("compiler_runtime.js"))} );
    static ref REQUIRE_JS: String = String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("bd-load.js"))} );
    static ref TYPESCRIPT: String = String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("typescript/index.js"))} );
    static ref ACORN: String = String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("acorn/index.js"))} );
    static ref SOURCE_MAP: String = String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("source-map/index.js"))} );
    static ref TERSER: String = String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("terser/index.js"))} );
    static ref DENO_OPS: Vec<(String, String)> = {
        let mut files = Vec::new();

        files.push((String::from("bootstrap.js"), String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("js_ops/00_bootstrap_namespace.js"))} )));
        files.push((String::from("build.js"), String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("js_ops/01_build.js"))} )));
        files.push((String::from("crypto.js"), String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("js_ops/01_crypto.js"))} )));
        files.push((String::from("colors.js"), String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("js_ops/01_colors.js"))} )));
        files.push((String::from("event.js"), String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("js_ops/01_event.js"))} )));
        files.push((String::from("error.js"), String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("js_ops/01_errors.js"))} )));
        files.push((String::from("internals.js"), String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("js_ops/01_internals.js"))} )));
        files.push((String::from("version.js"), String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("js_ops/01_version.js"))} )));
        files.push((String::from("web_util.js"), String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("js_ops/01_web_util.js"))} )));
        files.push((String::from("console.js"), String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("js_ops/02_console.js"))} )));
        files.push((String::from("interface.js"), String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("js_ops/03_global_interfaces.js"))} )));
        files.push((String::from("util.js"), String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("js_ops/06_util.js"))} )));
        files.push((String::from("text_encoding.js"), String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("js_ops/08_text_encoding.js"))} )));
        files.push((String::from("dispatch.js"), String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("js_ops/10_dispatch_minimal.js"))} )));
        files.push((String::from("urls.js"), String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("js_ops/11_url.js"))} )));
        files.push((String::from("timers.js"), String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("js_ops/11_timers.js"))} )));
        files.push((String::from("io.js"), String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("js_ops/12_io.js"))} )));
        files.push((String::from("buffer.js"), String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("js_ops/13_buffer.js"))} )));
        files.push((String::from("fs.js"), String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("js_ops/30_fs.js"))} )));
        files.push((String::from("files.js"), String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("js_ops/30_files.js"))} )));
        files.push((String::from("perf.js"), String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("js_ops/40_performance.js"))} )));
        files.push((String::from("tty.js"), String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("js_ops/40_tty.js"))} )));
        files.push((String::from("signals.js"), String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("js_ops/40_signals.js"))} )));
        files.push((String::from("fs_events.js"), String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("js_ops/40_fs_events.js"))} )));
        files.push((String::from("read_file.js"), String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("js_ops/40_read_file.js"))} )));
        files.push((String::from("write_file.js"), String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("js_ops/40_write_file.js"))} )));
        files.push((String::from("prompt.js"), String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("js_ops/41_prompt.js"))} )));
        files.push((String::from("main.js"), String::from(unsafe { std::str::from_utf8_unchecked(include_bytes!("js_ops/99_main.js"))} )));

        files
    };
}

// DENO_OPS.iter().for_each(|(name, file) | {
//   js_runtime.execute(name, file).unwrap();
// });


/// This worker is created and used by almost all
/// subcommands in Deno executable.
///
/// It provides ops available in the `Deno` namespace.
///
/// All `WebWorker`s created during program execution
/// are descendants of this worker.
pub struct MainWorker {
  pub js_runtime: JsRuntime,
  should_break_on_first_statement: bool,
}

impl MainWorker {
  pub fn new(
    // main_module: ModuleSpecifier,
    // permissions: Permissions,
    // options: &WorkerOptions,
  ) -> Self {
    let mut js_runtime = JsRuntime::new(RuntimeOptions {
      ..Default::default()
    });

    let should_break_on_first_statement = false;

    let mut worker = Self {
      js_runtime,
      should_break_on_first_statement,
    };

    let js_runtime = &mut worker.js_runtime;

    DENO_OPS.iter().for_each(|(name, file) | {
        js_runtime.execute(name, file).unwrap();
    });
    {
      // All ops registered in this function depend on these
      {
        let op_state = js_runtime.op_state();
        let mut op_state = op_state.borrow_mut();
        op_state.put(RuntimeMetrics::default());
        // op_state.put::<Permissions>(permissions);
        // op_state.put(ops::UnstableChecker {
        //   unstable: options.unstable,
        // });
      }

      // rs_ops::runtime::init(js_runtime, main_module);
      // rs_ops::fetch::init(
      //   js_runtime,
      //   options.user_agent.clone(),
      //   options.ca_data.clone(),
      // );
      rs_ops::timers::init(js_runtime);
      // rs_ops::worker_host::init(
      //   js_runtime,
      //   None,
      //   options.create_web_worker_cb.clone(),
      // );
      let mut rng = rand::thread_rng();
      rs_ops::crypto::init(js_runtime, Some(rng.gen()));
      rs_ops::reg_json_sync(js_runtime, "op_close", deno_core::op_close);
      rs_ops::reg_json_sync(js_runtime, "op_resources", deno_core::op_resources);
      // rs_ops::reg_json_sync(
      //   js_runtime,
      //   "op_domain_to_ascii",
      //   deno_web::op_domain_to_ascii,
      // );
      rs_ops::fs_events::init(js_runtime);
      rs_ops::fs::init(js_runtime);
      rs_ops::io::init(js_runtime);
      // rs_ops::net::init(js_runtime);
      // rs_ops::os::init(js_runtime);
      // rs_ops::permissions::init(js_runtime);
      // rs_ops::plugin::init(js_runtime);
      // rs_ops::process::init(js_runtime);
      // rs_ops::signal::init(js_runtime);
      // rs_ops::tls::init(js_runtime);
      rs_ops::tty::init(js_runtime);
      // rs_ops::websocket::init(
      //   js_runtime,
      //   options.user_agent.clone(),
      //   options.ca_data.clone(),
      // );
    }
    {
      let op_state = js_runtime.op_state();
      let mut op_state = op_state.borrow_mut();
      let t = &mut op_state.resource_table;
      let (stdin, stdout, stderr) = rs_ops::io::get_stdio();
      if let Some(stream) = stdin {
        t.add(stream);
      }
      if let Some(stream) = stdout {
        t.add(stream);
      }
      if let Some(stream) = stderr {
        t.add(stream);
      }
    }

    worker
  }

    // pub fn new(
    //   // main_module: ModuleSpecifier,
    //   // options: &WorkerOptions,
    // ) -> Self {
    //   let mut js_runtime = JsRuntime::new(RuntimeOptions {
    //     module_loader: None,
    //     startup_snapshot: None,
    //     js_error_create_fn: None,
    //     get_error_class_fn: None,
    //     ..Default::default()
    //   });

    //     DENO_OPS.iter().for_each(|(name, file) | {
    //         js_runtime.execute(name, file).unwrap();
    //     });
  
    //   let should_break_on_first_statement = false;
  
    //   let mut worker = Self {
    //     js_runtime,
    //     should_break_on_first_statement,
    //   };
  
    //   let js_runtime = &mut worker.js_runtime;
    //   {
    //     // All ops registered in this function depend on these
    //     {
    //       let op_state = js_runtime.op_state();
    //       let mut op_state = op_state.borrow_mut();
    //       op_state.put::<Metrics>(Default::default());
    //     //   op_state.put::<rs_ops::UnstableChecker>(rs_ops::UnstableChecker {
    //     //     unstable: options.unstable,
    //     //   });
    //     }

    //     rs_ops::path_resolve::init(js_runtime);
  
    //     // rs_ops::runtime::init(js_runtime, main_module);
    //     // rs_ops::fetch::init(
    //     //   js_runtime,
    //     //   options.user_agent.clone(),
    //     //   options.ca_filepath.as_deref(),
    //     // );
    //     rs_ops::timers::init(js_runtime);
    //     // rs_ops::worker_host::init(
    //     //   js_runtime,
    //     //   None,
    //     //   options.create_web_worker_cb.clone(),
    //     // );
    //     rs_ops::crypto::init(js_runtime, None);
    //     rs_ops::reg_json_sync(js_runtime, "op_close", deno_core::op_close);
    //     rs_ops::reg_json_sync(js_runtime, "op_resources", deno_core::op_resources);
    //     // rs_ops::reg_json_sync(
    //     //   js_runtime,
    //     //   "op_domain_to_ascii",
    //     //   deno_web::op_domain_to_ascii,
    //     // );
    //     rs_ops::fs_events::init(js_runtime);
    //     rs_ops::fs::init(js_runtime);
    //     rs_ops::io::init(js_runtime);
    //     // rs_ops::net::init(js_runtime);
    //     // rs_ops::os::init(js_runtime);
    //     // rs_ops::permissions::init(js_runtime);
    //     // rs_ops::plugin::init(js_runtime);
    //     // rs_ops::process::init(js_runtime);
    //     // rs_ops::signal::init(js_runtime);
    //     // rs_ops::tls::init(js_runtime);
    //     rs_ops::tty::init(js_runtime);
    //     // rs_ops::websocket::init(
    //     //   js_runtime,
    //     //   options.ca_filepath.as_deref(),
    //     //   options.user_agent.clone(),
    //     // );
    //   }
    //   {
    //     let op_state = js_runtime.op_state();
    //     let mut op_state = op_state.borrow_mut();
    //     let t = &mut op_state.resource_table;
    //     let (stdin, stdout, stderr) = rs_ops::io::get_stdio();
    //     if let Some(stream) = stdin {
    //       t.add(stream);
    //     }
    //     if let Some(stream) = stdout {
    //       t.add(stream);
    //     }
    //     if let Some(stream) = stderr {
    //       t.add(stream);
    //     }
    //   }
  
    //   worker
    // }
  
    pub fn bootstrap(&mut self) {

      let v: Vec<String> = Vec::new();

      let runtime_options = json!({
        "args": v,
        "applySourceMaps": false,
        "tsVersion": "4.1.3",
        "debugFlag": false,
        "denoVersion": "0.75.0",
        "noColor": false,
        "user_agent": "Reach Web Service",
        "pid": std::process::id(),
        "ppid": rs_ops::runtime::ppid(),
        "target": "this",
        "v8Version": deno_core::v8_version(),
      });
  
      let script = format!(
        "bootstrap.mainRuntime({})",
        serde_json::to_string_pretty(&runtime_options).unwrap()
      );
      self
        .execute("bootstrap.js", &script)
        .expect("Failed to execute bootstrap script");
      
      let set_cwd = format!("window.cwd = '{}';", ROOT_DIR.to_str().unwrap());
      self.execute("set_cwd.js", &set_cwd).expect("Failed to set root path");

      self.execute("require.js", &REQUIRE_JS).expect("Failed to execute AMD Loader.");
      self.execute("typescript.js", &TYPESCRIPT).expect("Failed to execute Typescript.");
      self.execute("acorn.js", &ACORN).expect("Failed to execute Acorn JS.");
      self.execute("source-map.js", &SOURCE_MAP).expect("Failed to execute source map JS.");
      self.execute("terser.js", &TERSER).expect("Failed to execute terser JS.");
      self.execute("compiler.js", &COMPILER_RUNTIME_JS).expect("Failed to execute Runtime JS.");
    }
  
    /// Same as execute2() but the filename defaults to "$CWD/__anonymous__".
    pub fn execute(&mut self, filename: &str, js_source: &str) -> Result<(), AnyError> {
      self.js_runtime.execute(filename, js_source)
    }
  
    // /// Loads and instantiates specified JavaScript module.
    // pub async fn preload_module(
    //   &mut self,
    //   module_specifier: &ModuleSpecifier,
    // ) -> Result<ModuleId, AnyError> {
    //   self.js_runtime.load_module(module_specifier, None).await
    // }
  
    // /// Loads, instantiates and executes specified JavaScript module.
    // pub async fn execute_module(
    //   &mut self,
    //   module_specifier: &ModuleSpecifier,
    // ) -> Result<(), AnyError> {
    //   let id = self.preload_module(module_specifier).await?;
    //   // self.wait_for_inspector_session();
    //   self.js_runtime.mod_evaluate(id).await
    // }
  
    // fn wait_for_inspector_session(&mut self) {
    //   if self.should_break_on_first_statement {
    //     self
    //       .inspector
    //       .as_mut()
    //       .unwrap()
    //       .wait_for_session_and_break_on_next_statement()
    //   }
    // }
  
    /// Create new inspector session. This function panics if Worker
    /// was not configured to create inspector.
    // pub fn create_inspector_session(&mut self) -> Box<InspectorSession> {
    //   let inspector = self.inspector.as_mut().unwrap();
  
    //   InspectorSession::new(&mut **inspector)
    // }
  
    fn poll_event_loop(
      &mut self,
      cx: &mut Context,
    ) -> Poll<Result<(), AnyError>> {
      // We always poll the inspector if it exists.
      // let _ = self.inspector.as_mut().map(|i| i.poll_unpin(cx));
      self.js_runtime.poll_event_loop(cx)
    }
  
    pub async fn run_event_loop(&mut self) -> Result<(), AnyError> {
      poll_fn(|cx| self.poll_event_loop(cx)).await
    }
  }
  
  impl Drop for MainWorker {
    fn drop(&mut self) {
      // The Isolate object must outlive the Inspector object, but this is
      // currently not enforced by the type system.
      // self.inspector.take();
    }
  }