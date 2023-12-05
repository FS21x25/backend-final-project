const express = require('express');
const route = express.Router();

const materiRoute = require('./materi.route');
const desRoute = require('./des.route');
const sertifikasiRoute = require('./sertifikasi.route');
const webinarRoute = require('./webinar.route');
const seminarRoute = require('./seminar.route');

route.get('/', (req, res) => {
  res.json('Materi Pembelajaran');
});

route.use('/materies', materiRoute);
route.use('/des', desRoute);
route.use('/sertifikasi', sertifikasiRoute);
route.use('/webinar', webinarRoute);
route.use('/seminar', seminarRoute);

module.exports = route;
