const mongoose = require("mongoose");
const { Schema } = mongoose;

const Profile = new Schema({
  name: String,
  birthMonth: Number,
  birthDay: Number,
  birthYear: Number,
  gender: String,
  lifePath: Number,
  zodiacSign: String,
  email: String,
});

module.exports = mongoose.model("numerologyprofiles", Profile);
