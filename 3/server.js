const http = require("http");

const port = 5500;

http.createServer((request, response) => {
    console.log(request.url);
    response.end(request.url)
  }).listen(port);

console.log("Server running");
