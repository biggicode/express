const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

// req => middleware => res
// app.use("/api", logger);
app.use([logger, authorize]);
// api/home/about/products

app.get("/", (req, res) => {
  console.log(req.user);
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.status(200).send("About");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.get("/api/products", (req, res) => {
  res.status(200).send("Products");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
