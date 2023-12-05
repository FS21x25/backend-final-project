const express = require('express');
const route = express.Router();

const { getAllMateri } = require('../controllers/materi.controller');

route.get('/', getAllMateri);

module.exports = route;
