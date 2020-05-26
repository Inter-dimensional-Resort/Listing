const fs = require('fs');
const jsonexport = require('jsonexport');
const { Readable } = require('stream');
const { generateListing } = require('./mockData.js');


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


// readable class with jsonexport
const writestream = fs.createWriteStream('./database/data.csv');
const newListing = new ListingStream();
newListing.pipe(jsonexport()).pipe(writestream);
