const express = require("express");
const path = require("path");

const app = express();

//set up static and middleware
app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
//   adding to assets
//   SSR
// });

app.all("*", (req, res) => {
  res.status(404).send("cannot find the resource");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
