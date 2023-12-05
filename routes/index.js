const express = require('express');
const route = express.Router();

const materiRoute = require('./materi.route');

route.get('/', (req, res) => {
  res.json('Materi Pembelajaran');
});

route.use('/materies', materiRoute);

module.exports = route;
