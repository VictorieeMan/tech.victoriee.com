---
date: 2023-09-30
---

# Rust-Axum: Hello World!

Setting up a minimal working example of an Axum server. First up! Start a new rust project, assuming you already have installed cargo on your system. (If not, follow [these steps](https://doc.rust-lang.org/cargo/getting-started/installation.html) to install cargo.) Open your terminal in a suitable location and run:

```bash
cargo new axum_hello_world; cd axum_hello_world
```

Now edit the cargo.toml file so that all needed dependencies are included:

```rust
[dependencies]
axum = "0.6.20"
hyper = { version = "0.14.27", features = ["full"] }
tokio = { version = "1.32.0", features = ["full"] }
tower = "0.4.13"
```

You may use later versions of these, but take note that this solution described is only tested for the given cargo file.

Now it’s time to add code to the main.rs file. Start by importing the use of the axum module and the needed items, we add this to the top of our main.rs file:

```rust
use axum::{routing::get, Router,};
```

Now, when rust knows what to use from its cargo, we go on to developing the main() function. When working with axum we do something special that’s normally not allowed in rust, and that is to declare the main function as being an async (asynchronous) function. To make this work, the Axum framework cooperates with the tokio package. And a little tokio reference must be added before the function like this:

```rust
#[tokio::main]
async fn main() {

}
```

Now it’s ready for some action. We declare a variable (name it whatever you want) and name it “app”, then we let this hold an instance of an Axum Router:

```rust
#[tokio::main]
async fn main() {
    // build our application with a single route
    let app = Router::new().route("/", get(|| async { "Hello, World!" }));
}
```

PS; notice our little “Hello, World!” message string dropped in the router. This is the info that the router will deliver when called in the next piece of code. Where…

It’s time to serve! Now we initiate an axum server, and binds it to one of our local networking ports. And we’ll add our “app” for the server to serve, wen being called by an user / client:

```rust
    // run it with hyper on localhost:3000
    axum::Server::bind(&"0.0.0.0:3000".parse().unwrap())
    .serve(app.into_make_service())
    .await
    .unwrap();
```

Putting all the pieces together, our minimal working code looks like this:

```rust
use axum::{
    routing::get,
    Router,
};

#[tokio::main]
async fn main() {
    // build our application with a single route
    let app = Router::new().route("/", get(|| async { "Hello, World!" }));

    // run it with hyper on localhost:3000
    axum::Server::bind(&"0.0.0.0:3000".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}
```

And to do a test run, you have to build your executable. The following commands are the ones I usually use while iterating my code:

```bash
cargo clean; cargo build; cargo run
```

Run them in the terminal, and then visit “localhost:3000” in your browser. If everything checks out, you will see a “Hello, World!” message in the browser window. Nothing fancy, but a little sign and glimmer of hope that things can actually work in this world.

Thanks for reading, I hope this was useful. This was my first test at writing a medium article. Feedback appreciated, I think? ;) I might be doing some more Axum basics coming up. The speed and efficiency of rust, combined with its easy use of cargo, makes it very appealing even for webbdev I think. So further exploration of its capabilities is on my list.
