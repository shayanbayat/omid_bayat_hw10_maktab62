const http = require("http");
const fs = require("fs");
const port = 5500;

http.createServer((request, response) => {
    if (request.url === "/login" && request.method === "GET") {
      fs.readFile("./login.html", (err, data) => {
        if (err) throw err;
        response.end(data);
      });
    } else if (request.url === "/style" && request.method === "GET") {
      fs.readFile("./style.css", "utf-8", (err, style) => {
        if (err) return response.end(errPage);
        response.end(style);
      });
    } else if (request.url === "/ir.jpg" && request.method === "GET") {
      fs.readFile("./ir.jpg", (err, img) => {
        if (err) throw err;
        response.end(img);
      });
    } else if (request.url === "/main" && request.method === "GET") {
      fs.readFile("./main.js",  (err, script) => {
        if (err) throw err;
        response.end(script);
      });
    }
  }).listen(port);



console.log("Server running");
