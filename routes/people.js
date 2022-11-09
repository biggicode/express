const express = require("express");
const router = express.Router();

let { people } = require("../data");

router.get("/", (req, res) => {
  res.status(200).json({ succes: true, data: people });
});

router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ succes: false, msg: "Please provide name value" });
  }
  res.status(201).json({ succes: true, person: name });
});

router.post("/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ succes: false, msg: "please provide name value lalala" });
  }
  res.status(201).send({ succes: true, data: [...people, name] });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(400)
      .json({ succes: false, msg: "can not find the person" });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  res.status(200).json({ succes: true, data: newPeople });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(400)
      .json({ succes: false, msg: "can not find the person" });
  }

  const newPeople = people.filter((person) => person.id !== Number(id));

  return res.status(200).json({ succes: true, data: newPeople });
});

module.exports = router;
