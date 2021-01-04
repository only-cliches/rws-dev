
use deno_core::OpFn;
use crate::ROOT_DIR;
use std::fs;
use deno_core::error::*;
use deno_core::{OpState, ZeroCopyBuf, error::{AnyError, anyhow}, json_op_sync, serde_json::Value};
use deno_core::JsRuntime;
use deno_core::serde_json::*;

pub fn init(rt: &mut JsRuntime) {
    rt.register_op("resolve_mod_path", json_op_sync(resolve_path));
}
// fs.existsSync
// fs.watchFile
// fs.fileExists
// fs.readDirectory
// fs.directoryExists
// fs.getDirectories

fn resolve_path(state: &mut OpState, json_value: Value, buffer: &mut [ZeroCopyBuf]) -> std::result::Result<Value, AnyError> {

    // make sure no one can call the require code except Require module

    let path = {
        match json_value["mid"].as_str() {
            Some(mid) => { mid },
            None => { json_value["url"].as_str().expect("Tried to load module without url") }
        }
    };

    let mut starting = ROOT_DIR.clone();

    if path.contains("/") {
        path.split("/").into_iter().enumerate().for_each(|(idx, path)| {
            if path.contains("..") == false && idx > 0 {
                starting.push(path);
            }
        });
    } else {
        starting.push("static");
        starting.push("libs");
        starting.push(path);
        starting.push("index.js");
    }

    if starting.exists() { // file exists
        Ok(json!({"path": starting.to_str()}))
    } else { // doesn't exist
        Ok(json!({"path": false}))
    }    
}