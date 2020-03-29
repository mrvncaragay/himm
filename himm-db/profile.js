const mongoose = require('./db');

const Profile = mongoose.model('Profiles', new mongoose.Schema({
    title: String,
    userImg: String,
    city: String,
    price: Number,
    userName: String,
    numberOfMaxGuest: Number,
    numberOfBedrooms: Number,
    numberOfBeds: Number,
    numberOfBaths: Number,
    listingBody: String,
    highlight: [
        {
            characteristic: String,
            description: String
        }
    ],
    amen: [
        {
            title: String
        }
    ]
}, { typeKey: '$type' } ));

module.exports = Profile;
