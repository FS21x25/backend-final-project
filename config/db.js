require('dotenv').config();
const mongoose = require('mongoose');

const db_url = process.env.db_url || 'mongodb:localhost/my_app';

const db = mongoose.connect(db_url);

module.exports = db;
