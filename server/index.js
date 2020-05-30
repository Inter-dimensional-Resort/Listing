require('newrelic');
const express = require('express');
const cors = require('cors');


const getProduct = require('./connect_postgres.js');

const app = express();
const port = 3002;
app.use(cors());
app.use(express.static(`${__dirname}/../client/dist`));
app.use(express.json());


app.get('/listings/:id', getProduct);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
