require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const { createDestination, getDestinations } = require('./controllers/destination.controller');

app.use(cors()); // untuk mengaktifkan cors, agar API bisa diakses dari luar atau dari frontend
app.use(express.json()) // parse request body dari JSON ke Object
app.use(express.urlencoded({ extended: true })) // parse request body dari x-www-form-urlencoded ke Object


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post("/destinations", createDestination);
app.get("/destinations", getDestinations);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});