const http = require("http");

const port = 5500;

http.createServer((request, response) => {
    if (request.url === "/" && request.method === "GET") {
      console.log("Hello Web Application");
    } else if (request.url === "/about" && request.method === "GET") {
      console.log("About Me");
    } else if (request.url === "/main" && request.method === "GET") {
      console.log("main");
    } else if (request.url === "/login") {
      console.log("login");
    } else if (request.url === "/users" && request.method === "GET") {
      console.log("is private");
    } else {
      console.log("Not Found");
    }
  }).listen(port);


 console.log("Server running");
