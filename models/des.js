const mongoose = require('mongoose');

const desSchema = new mongoose.Schema({
    iklan: String,
    img: String,
    deskripsi: String,
    link: String,
})
const Des = mongoose.model("Des", desSchema)

module.exports = Des