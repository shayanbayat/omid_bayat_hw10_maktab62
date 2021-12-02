const http = require("http");
const fs = require("fs");
const port = 5500;


http.createServer((request, response) => {
    // console.log(request.url);
    if (request.url === "/" && request.method === "GET") {
      fs.readFile("./Home.html", (err, data) => {
        if (err) throw err;
        response.end(data);
      });
    }
  }).listen(port);

console.log("Server running");
