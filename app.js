const http = require("http");

const server = http.createServer((req, res) => {
  console.log("ala bala mere");
  res.end("home page");
});

server.listen(5000);
