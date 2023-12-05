const mongoose = require('mongoose');

const materiSchema = new mongoose.Schema({
  image: String,
  category: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
    maxlength: 100,
  },
  price: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

const Materi = mongoose.model('Materi', materiSchema);

module.exports = Materi;
