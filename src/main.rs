use actix_web::{HttpResponse, guard};
use actix_http::http::{StatusCode, header::DispositionType};
use actix_web::http::header::ContentDisposition;
use core::cell::RefCell;
use std::path::PathBuf;
use actix::{Actor, StreamHandler};
use actix_web_actors::ws;
use actix_web::{HttpRequest, web, Result};
use tokio::task::LocalSet;
use tokio::runtime::*;
use tokio::time::*;
use deno_core::*;
use futures::{StreamExt};
use std::env;
use actix_files as fs;

use serde::{Deserialize, Serialize};

#[macro_use]
extern crate lazy_static;

lazy_static! {
    /// This is an example for using doc comment attributes
    static ref ROOT_DIR: PathBuf = {
        let mut dir = env::current_exe().unwrap();
        dir.pop();
        dir.pop();
        dir.pop();
        dir.push("root");
        dir
    };
    static ref DEV_MODE: bool = true;
}

struct MyWs;

impl Actor for MyWs {
    type Context = ws::WebsocketContext<Self>;
}

/// Handler for ws::Message message
impl StreamHandler<Result<ws::Message, ws::ProtocolError>> for MyWs {
    fn handle(
        &mut self,
        msg: Result<ws::Message, ws::ProtocolError>,
        ctx: &mut Self::Context,
    ) {
        match msg {
            Ok(ws::Message::Ping(msg)) => ctx.pong(&msg),
            Ok(ws::Message::Text(text)) => ctx.text(text),
            Ok(ws::Message::Binary(bin)) => ctx.binary(bin),
            _ => (),
        }
    }
}

async fn main_handler(
    ctx: actix_web::web::Data<RefCell<JsRuntime>>,
    req: HttpRequest,
    mut body: actix_web::web::Payload,
) -> actix_web::HttpResponse {
    // actix_web::HttpResponse::from("<h1>Hello, world!</h1>")
    // let mut result = actix_web::HttpResponse::Ok();

    let mut bytes = actix_web::web::BytesMut::new();
    while let Some(item) = body.next().await {
        bytes.extend_from_slice(&item.unwrap());
    }

    // let resp = ws::start(MyWs {}, &req, body).unwrap();

    // println!("thread: {:?}", std::thread::current().id());

    if bytes.len() > 0 {
        println!("Req bytes: {:?}", bytes);
    }

    // let now = Instant::now();

    // // Deno.core.print()
    // match js_context.execute("file.js", "Deno.core.print(Math.random());") {
    //     Ok(_x) => {
    //         // println!("Success {:?}", x);
    //     },
    //     Err(_x) => {
    //         // println!("Error {:?}", x);
    //     }
    // };
    // Deno.core.print()

    // println!("\n {}", now.elapsed().as_micros());


    actix_web::HttpResponse::Ok()
        .content_type("text/html")
        .body(r##"<h2>hello</h2><script>
            const socket = new WebSocket('ws://localhost:8082');

            // Connection opened
            socket.addEventListener('open', function (event) {
                socket.send('Hello Server!');
            });
            
            // Listen for messages
            socket.addEventListener('message', function (event) {
                console.log('Message from server ', event.data);
            });
        </script>"##)
}

// rusty_v8::isolate::OwnedIsolate
fn new_js_context() -> RefCell<JsRuntime> {
    RefCell::new(JsRuntime::new(RuntimeOptions::default()))
}

async fn service_handler(
    ctx: actix_web::web::Data<JsRuntime>,
    req: HttpRequest,
    web::Path((app_name, endpoint, )): web::Path<(String, String, )>,
) -> actix_web::HttpResponse {

    println!("{} {}", app_name, endpoint);


    actix_web::HttpResponse::Ok()
        .content_type("text/html")
        .body(r##"<h2>hello params</h2>"##)
}


#[derive(Serialize, Deserialize)]
struct Dev_List_Apps {
    app_list: Vec<String>
}

async fn dev_handler(
    req: HttpRequest,
    web::Path((page, action)): web::Path<(String, String)>,
) -> actix_web::HttpResponse {

    let mut app_dir = ROOT_DIR.clone();
    app_dir.push("apps");

    match action.as_str() {
        "list_apps" => {

            let mut stream = tokio::fs::read_dir(app_dir).await.unwrap();

            let mut items: Vec<String> = Vec::new();

            while let Ok(Some(item)) = stream.next_entry().await {
                let file_type = item.file_type().await.unwrap();
                if file_type.is_dir() {
                    items.push(String::from(item.file_name().to_str().unwrap()))
                }
            }

            HttpResponse::Ok().json(Dev_List_Apps {
                app_list: items
            })
        },
        _ => { actix_web::HttpResponse::NotAcceptable().body("") }
    }
}

async fn spa_handler() -> fs::NamedFile {
    // 1.
    let mut index_html = ROOT_DIR.clone();
    index_html.push("static");
    index_html.push("root_portal");
    index_html.push("index.html");

    let file = fs::NamedFile::open(index_html).unwrap().use_last_modified(true)
    .set_content_disposition(ContentDisposition {
        disposition: DispositionType::Inline,
        parameters: vec![],
    });

    file
}

fn main() {

    if *DEV_MODE {

    } else {
        panic!()
    }

    println!("ROOT DIR {:#?}", ROOT_DIR.display());

    let mut tokio_runtime = Builder::new()
        .basic_scheduler()
        .enable_all()
        .build()
        .unwrap();

    let local = LocalSet::new();
    let system_fut = actix_rt::System::run_in_tokio("main", &local);
    local.block_on(&mut tokio_runtime, async {
        tokio::task::spawn_local(system_fut);

        let _ = actix_web::HttpServer::new(|| {

            let mut static_dir = ROOT_DIR.clone();
            static_dir.push("static");
            let static_files  = fs::Files::new("/static", static_dir).disable_content_disposition();

            let mut dev_dir = ROOT_DIR.clone();
            dev_dir.push("static");
            dev_dir.push("root_portal");
            let dev_files = fs::Files::new("/", dev_dir).disable_content_disposition().index_file("index.html");

            actix_web::App::new()
                .data(new_js_context())
                .route("/service/{app_name}/{endpoint}", web::get().to(service_handler))
                .route("/root/{page}/{action}", web::post().to(dev_handler))
                .service(static_files)
                .service(dev_files)
                .default_service(
                    // 404 for GET request
                    web::resource("")
                        .route(web::get().to(spa_handler))
                        // all requests that are not `GET`
                        .route(
                            web::route()
                                .guard(guard::Not(guard::Get()))
                                .to(HttpResponse::MethodNotAllowed),
                        ),
                )
                // .route("*", web::get().to(main_handler))
        })
        .bind("127.0.0.1:2096")
        .unwrap()
        .run()
        .await;
    });
}
