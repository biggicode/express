const http = require("http");
const { readFileSync } = require("fs");

//it's requested once not everytime somebody visit the page because isn't in createServer function
const homePage = readFileSync("./index.html");

const server = http.createServer((req, res) => {
  console.log("ala bala mere");
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (url === "/about") {
    //about page
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about page</h1>");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found</h1>");
    res.end();
  }
});

server.listen(5000);
