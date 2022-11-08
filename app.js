const express = require("express");

const app = express();
let { people } = require("./data");

//static assets
app.use(express.static("./methods-public"));
//parse form data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ succes: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ succes: false, msg: "Please provide name value" });
  }
  res.status(201).json({ succes: true, person: name });
});

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ succes: false, msg: "please provide name value lalala" });
  }
  res.status(201).send({ succes: true, data: [...people, name] });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please provide account");
});

app.listen(5000, () => {
  console.log("Server is listening on 5000");
});
