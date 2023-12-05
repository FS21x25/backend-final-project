require('dotenv').config();
const mongoose = require('mongoose');

const db_url = process.env.db_url || 'mongodb+srv://mfirdausnz1819:firdaus1819@cluster0.qv7lqu6.mongodb.net/mata_pembelajaran';

const db = mongoose.connect(db_url);

module.exports = db;
