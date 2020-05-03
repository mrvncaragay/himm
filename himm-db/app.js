const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const seed = require('./seedDB');

const Room = require('./rooms');
const Profile = require('./profile');
const Listing = require('./listings');
const Review = require('./reviews');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json('Working!');
});

app.get('/seed', (req, res) => {
  seed(() => {
    res.json({success: "Seeding db..."});
  })
});

app.get('/api/rooms/:id', (req, res) => {
  Room
    .find({ _id: req.params.id })
    .then(([ movie ]) => {
      res.json(movie);
    })
    .catch(err => console.log(err));
});

app.get('/api/rooms', (req, res) => {
  Room
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch(err => console.log(err));
});

app.get('/api/reviews', (req, res) => {
  Review
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch(err => console.log(err));
});

app.get('/api/listings', (req, res) => {
  Listing
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch(err => console.log(err));
});

app.get('/api/profiles', (req, res) => {
  Profile
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch(err => console.log(err));
});

const PORT = process.env.PORT || 81;
app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
});