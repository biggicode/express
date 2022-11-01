const http = require("http");

const server = http.createServer((req, res) => {
  console.log("ala bala mere");
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1>home page</h1>");
  res.end();
});

server.listen(5000);
