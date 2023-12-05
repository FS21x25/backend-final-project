const Webinar = require('../models/webinar');

module.exports = {
  getAllWebinar: async (req, res) => {
    const webinar = await Webinar.find()

    res.json({
      message: "berhasil mendapatkan data webinar",
      data: webinar
    })
  },
  getWebinarById: async (req, res) => {
    const {id} = req.params
    const webinar = await Webinar.findById(id)

    res.json(webinar)
  },

  createWebinar: async (req, res) => {
    let data = req.body

    await Webinar.create(data)

    res.json({
      message: "berhasil membuat data webinar"
    })
  },
}