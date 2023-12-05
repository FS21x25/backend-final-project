const mongoose = require('mongoose');

const webinarSchema = new mongoose.Schema({
    webinar: String,
    img: String,
    deskripsi: String,
    link: String,
})
const Webinar = mongoose.model("Webinar", webinarSchema)

module.exports = Webinar