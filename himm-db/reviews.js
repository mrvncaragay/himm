const mongoose = require('./db');

const Reviews = mongoose.model('reviews', new mongoose.Schema({
  username: String,
  text: String,
  userImg: String,
  createdMonth: String,
  communication: Number,
  accuracy: Number,
  location: Number,
  checkIn: Number,
  value: Number,
  cleanliness: Number,
  year: Number,
  }
));

module.exports = Reviews;