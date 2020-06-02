const { Pool } = require('pg');
require('dotenv').config();


const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

// async/await - check out a client
const getProduct = async (req, res) => {
  const { id } = req.params;

  const client = await pool.connect();
  try {
    const data = await client.query('SELECT * FROM listing WHERE id = $1', [id]);

    const listing = data.rows[0];
    res.send(listing);
  } finally {
    // Make sure to release the client before any error handling,
    // just in case the error handling itself throws an error.
    client.release();
  }
};

module.exports = getProduct;
