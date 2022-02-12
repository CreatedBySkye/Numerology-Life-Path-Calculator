const express = require("express");
const router = express.Router();
const ProfileCollection = require("../models/ProfileSchema.js");



router.get("/", (req, res) => {
  const { name } = req.query;
  ProfileCollection.findOne({ name }, (err, results) => {
    err ? res.send(err) : res.send(results);
  });
});


router.put("/:id", (req, res) => {
  ProfileCollection.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    (err, results) => {
      err ? res.send(err) : res.send(results);
    }
  );
});

router.delete("/:id", (req, res) => {
  ProfileCollection.findOneAndDelete(
    { email: req.query.email, _id: req.params.id },
    (err, results) => {
      err ? res.send(err) : res.send(results);
    }
  );
  });


module.exports = router;