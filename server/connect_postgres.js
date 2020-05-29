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
    const data = await client.query('SELECT * FROM info WHERE id = $1', [id]);
    res.send(data.rows[0]);
  } finally {
    // Make sure to release the client before any error handling,
    // just in case the error handling itself throws an error.
    client.release();
  }
};


// getProduct(2).catch(err => console.log(err.stack));

module.exports = getProduct;
