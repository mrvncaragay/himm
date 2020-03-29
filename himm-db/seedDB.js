const mongoose = require('mongoose');
const Room = require('./rooms');
const Listing = require('./listings');
const Profile = require('./profile');
const Review = require('./reviews');
const faker = require('faker');

const imagesCollection = [
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/1.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/2.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/3.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/4.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/5.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/6.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/7.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/8.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/9.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/10.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/11.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/12.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/13.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/14.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/15.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/16.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/17.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/18.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/19.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/19.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/20.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/20.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/21.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/22.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/23.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/24.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/25.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/26.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/27.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/28.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/29.jpg',
  'https://himm-images.s3-us-west-1.amazonaws.com/FEC+image+batch/30.jpg'
];

module.exports = (cb) => {

  const rooms = []
    for(let i = 0; i < 20; i++) {

      //Create random reviews. array of review object
      let reviews = [];
      for(let i = 0; i < faker.random.number({max: 30}); i++) {
        reviews.push({
          text: faker.lorem.words(),
          userImg: faker.image.imageUrl(),
          createAt: faker.date.past()
        });
      };

      let months = [
        'January', 
        'February', 
        'March', 
        'April', 
        'May', 
        'June', 
        'July', 
        'August',
        'September',
        'October',
        'November',
        'December'
      ];

      let booked_dates = {}

      const currentMonth = new Date();

      for(let i = 0; i < 12; i++) {
        booked_dates[months[i]] = [];
        
        if(currentMonth.getMonth() > i) {
          continue;
        }

        for(let j = 1; j < faker.random.number({max: 25}); j++) {

          let day = faker.random.number({min: 1, max: 31})
          if(!booked_dates[months[i]].includes(day)) {
            booked_dates[months[i]].push(day);
          }
        };

        booked_dates[months[i]].sort((a, b) => a - b);
      };

      rooms.push({
        per_night: faker.finance.amount(),
        booked_dates,
        reviews
      })
    }

    // Images //
    // randomly select an image
    const getRandomImage = () => {
      const index = Math.floor(Math.random() * 30);
      return imagesCollection[index];
    };


  
    const listings = []
    for(let i = 0; i < 30; i++) {
      const images= [];

      for(let i = 0; i < 15; i++) {
        images.push({
          url: getRandomImage(),
          description: faker.lorem.sentence()
        })
      }

      listings.push({ images })
    }
    // Images

    // Profile //
    const profiles = [];
    for (let i = 0; i < 15; i++) {
    let highlight = [];
    // faker.random.number({min: 4})
    for (let i = 0; i < 4; i++) {
        highlight.push({
            characteristic: faker.random.word(),
            description: faker.lorem.sentence()
        });
    };
    let amen = [];
    for (let i = 0; i < 10; i++) {
        amen.push({
            title: faker.random.word()
        });
    };
    profiles.push({
        title: faker.lorem.sentence(),
        userImg: faker.image.avatar(),
        city: faker.address.city(),
        price: Math.floor(Math.random()*2000),
        userName: faker.name.firstName(),
        numberOfMaxGuest: Math.floor(Math.random()*20),
        numberOfBedrooms: Math.floor(Math.random()*6),
        numberOfBeds: Math.floor(Math.random()*8),
        numberOfBaths: Math.floor(Math.random()*6),
        listingBody: faker.lorem.paragraphs(20),
        amen,
        highlight
    })
  }

  // Reviews //
  const reviews = [];

for (let i = 0; i < 20; i++) {
  reviews.push({
    firstName: faker.name.firstName(),
    text: faker.lorem.paragraphs(),
    userImg: faker.image.avatar(),
    createdMonth: faker.date.month(),
    communication: faker.random.number({ min: 3, max: 5 }),
    accuracy: faker.random.number({ min: 3, max: 5 }),
    location: faker.random.number({ min: 3, max: 5 }),
    checkIn: faker.random.number({ min: 3, max: 5 }),
    value: faker.random.number({ min: 3, max: 5 }),
    cleanliness: faker.random.number({ min: 3, max: 5 }),
    year: faker.random.number({ min: 2011, max: 2020 })
  }) 
}

  Room.insertMany(rooms, err => {
    if(err) console.log(err);

    Listing.insertMany(listings, err => {
      if(err) console.log(err);
  
      Profile.insertMany(profiles, err => {
        if (err) {
            console.log(err);
        } 

        Review.insertMany(reviews, err => {
          if (err) console.log(err);

          cb();
          mongoose.connection.close();

        })
      })

    })
  });
}
