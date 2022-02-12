const mongoose = require("mongoose");
const { Schema } = mongoose;

const LifePath = new Schema({
  pathNumber: Number,
  title: String,
  description: String,
});

module.exports = mongoose.model("numerologypaths", LifePath);