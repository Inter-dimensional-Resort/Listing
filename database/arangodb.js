const fs = require('fs');
const { Readable } = require('stream');

const generateListing = require('./mockData.js');


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
    listing._key = String(this.count);
    this.push(JSON.stringify(listing));
    this.push('\n');
    this.count += 1;
  }
}

const writestream = fs.createWriteStream('./data.jsonl');// , { flags: 'a' }
const newListing = new ListingStream();
newListing.pipe(writestream);
