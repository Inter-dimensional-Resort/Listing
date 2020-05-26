// const { Client } = require('pg')
// const client = new Client({
//     host: 'my.database-server.com',
//     port: 5334,
//     user: 'database-user',
//     password: 'secretpassword!!',
//   })
// client
//   .connect()
//   .then(() => console.log('connected'))
//   .catch(err => console.error('connection error', err.stack));
const fs = require('fs');
const jsonexport = require('jsonexport');
const { Readable } = require('stream');
// const csvWriter = require('csv-write-stream');
const { generateListing } = require('./mockData.js');


// const writestream = fs.createWriteStream('./db.csv');

// const jsonFile = (id) => {
//   const listing = generateListing();
//   listing.id = id;
//   return listing;
// };

class ListingStream extends Readable {
  constructor(options) {
    super(options);
    this.count = 1;
  }

  _read() {
    if (this.count > 1E7) {
      console.log('finished');
      this.push(null);
      return;
    }
    const listing = generateListing();
    listing.id = this.count;
    this.push(JSON.stringify(listing));
    this.count += 1;
  }
}
// writer.pipe(fs.createWriteStream('./db.csv'), { flags: 'a' });

// CSV-writer-stream
// const writer = csvWriter();
// writer.pipe(fs.createWriteStream('./database/db.csv'));
// writer.write({hello: "world", foo: "bar", baz: "taco"})
// writer.end()


// readable class with jsonexport
const writestream = fs.createWriteStream('./database/data.csv');// , { flags: 'a' }
const newListing = new ListingStream();
newListing.pipe(jsonexport()).pipe(writestream);

// JSON export
// const writer = fs.createWriteStream('./db.csv');
// jsonexport(generateListing(), (err, csv) => {
//   if (err) return console.log(err);
//   // console.log(csv);
//   writer.writer(csv);
// });
