const { Pool } = require('pg');
const auth = require('./.env');

const pool = new Pool({
  user: auth.username,
  host: 'localhost',
  database: 'info',
  password: auth.password,
});

// async/await - check out a client
const getProduct = async (req, res) => {
  const { id } = req.params;

  const client = await pool.connect();
  try {
    const data = await client.query('SELECT * FROM listing WHERE id = $1', [id]);

    const amenity = {
      basic: {
        hasWiFi: true,
        hasEssentials: true,
        hasCable: true,
        hasLaptopSpace: true,
        hasHeating: true,
      },
      dining: {
        hasKitchen: true,
      },
      bedAndBath: {
        hasPillowsBlankets: true,
      },
    };


    const listing = data.rows[0];
    const sleepingArrangements = {
      bedroom: data.rows[0].numberofbedrooms,
    };
    listing.amenity = amenity;
    listing.sleepingArrangements = sleepingArrangements;
    res.send(listing);
  } finally {
    // Make sure to release the client before any error handling,
    // just in case the error handling itself throws an error.
    client.release();
  }
};

module.exports = getProduct;
