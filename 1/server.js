const http = require("http");

const port = 5500;

http.createServer((request, response) => {
   response.end("Hello world")
  }).listen(port);

console.log("Server running");
