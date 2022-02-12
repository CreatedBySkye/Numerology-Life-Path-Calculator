
const express = require("express");
const router = express.Router();
const NumerologyCollection = require("../models/LifePathSchema.js");

router.get("/", (req, res) => {
  NumerologyCollection.find({}, (err, results) => {
    err ? res.send(err) : res.send(results);
  });
});

module.exports = router;