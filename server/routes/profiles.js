const express = require("express");
const getSign = require("horoscope").getSign;
const lifePathNumber = require("../lifepath.js");
const router = express.Router();
const ProfileCollection = require("../models/ProfileSchema.js");


router.post("/", (req, res) => {
  const bodyData = req.body;


  const zodiacSign = getSign({
    month: bodyData.birthMonth,
    day: bodyData.birthDay,
  });

  const lifePath = lifePathNumber(
    (bodyData.birthYear + bodyData.birthMonth + bodyData.birthDay).toString()
  );

  const newProfile = { ...bodyData, zodiacSign, lifePath };
  

  ProfileCollection.create(newProfile, (err, results) => {
    err ? res.send(err) : res.send(results);
  });
});


router.get("/", (_, res) => {
  ProfileCollection.find({}, (err, results) => {
    err ? res.send(err) : res.send(results);
  });
});


router.get("/user", (req, res) => {
  const { email } = req.query;
  ProfileCollection.find({ email }, (err, results) => {
    err ? res.send(err) : res.send(results);
  });
});

module.exports = router;
