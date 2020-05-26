const faker = require('faker');
// const db = require('./index.js');

const titleRandom = ['Perfectly located', 'Light & spacious garden flat', 'Private Modern Guesthouse', 'Ocean View Hideaway', 'Perfect Haven by Golden Gate', 'Private Backyard Cottage', 'Sunny Room Heart of', 'Luxury Gold Coast', 'Central Surfers Studio OceanView', 'Broken Head Bodhi Treehouse', 'Mountain tiny house', 'Blue Mountains Cottage', 'The Copa Cabana', 'The Tree House', 'Stroll Around Victoria Park', 'Entire Home with Opera House views', 'Luxury Apartment in the heart of', 'Stylish inner-city home', 'Little Paradise', 'Stunning River View'];
const roomInfoRandom = ['Private room', 'Entire guesthouse', 'Entire guestsuite', 'Entire House'];
const titleRandomArray = titleRandom[Math.floor(Math.random() * titleRandom.length)];
const roomInfoRandomArray = roomInfoRandom[Math.floor(Math.random() * roomInfoRandom.length)];
const hostImage = Math.floor(Math.random() * 30) + 1;


function booleanGenerator() {
    return Math.random() > 0.5;
}

function numberOfGuests() {
    if (roomInfoRandomArray === 'Private room') {
        return 2;
    } else {
        return 6;
    }
}

function numberOfBedrooms() {
    if (roomInfoRandomArray === 'Private room') {
        return 1;
    } else {
        return Math.floor(Math.random()*(5 - 2)) + 2; 
    }
}

function numberOfBeds() {
    if (roomInfoRandomArray === 'private room') {
        return 1;
    } else {
        return Math.floor(Math.random()*(5-2)) + 2;
    }
}

function numberOfBaths() {
    if (roomInfoRandomArray === 'private room') {
        return 1;
    } else {
        return Math.floor(Math.random()*(4-2)) + 2;
    }
}
const amenity = () => {
    let amenity = {
         basic: {
             hasWiFi: true,
             hasEssentials: true,
             hasCable: true,
             hasLaptopSpace: true,
             hasHeating: true,
         },
         dining: {
             hasKitchen: true
         },
         bedAndBath: {
             hasPillowsBlankets: true
         },
     }

     return amenity;
 }

function generateListing() {
    let city = faker.address.city();
    let bedroom = numberOfBedrooms();
    let listing = {
        city: city,
        title: `${titleRandomArray} ${city}`,
        hostImage: `https://s3-us-west-1.amazonaws.com/airbnb-host-photos/host${hostImage}.jpg`,
        roomInfo: roomInfoRandomArray,
        numberOfGuests: numberOfGuests(),
        numberOfBedrooms: bedroom,
        numberOfBeds: numberOfBeds(),
        numberOfBaths: numberOfBaths(),
        isSuperhost: booleanGenerator(),
        isGreatLocation: booleanGenerator(),
        isSparklingClean: booleanGenerator(),
        isGreatCheckIn: booleanGenerator(),
        isSelfCheckIn: booleanGenerator(),
        description: faker.lorem.paragraph() + faker.lorem.paragraph(),
        amenities: amenity(),
        sleepingArrangements: {
            bedroom: bedroom,
        },
    }
    return listing;
}

// console.log(generateListing());
module.exports = { generateListing };


// console.log(dbData);
// db.insertMany(dbData, function(error, docs) {
//     if (error) {
//         console.log('Error Seeding..');
//     } else {
//         console.log('Seeding Success!');
//     }
// });
