const express = require("express");
const app = express();
const morgan = require("morgan");
const logger = require("./logger");
const authorize = require("./authorize");

// req => middleware => res
// app.use(logger)
// app.use("/api", logger);

// app.use([logger, authorize]);
// api/home/about/products

//options - our own/ express/ third party
// express example is app.use(express.static('./public))
// third party example morgan npm
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.status(200).send("About");
});

// app.get("/api/items", [logger, authorize], (req, res) => {
//   console.log(req.user);
//   res.send("Items");
// });

app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("Items");
});

app.get("/api/products", (req, res) => {
  res.status(200).send("Products");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
