const Seminar = require('../models/seminar');

module.exports = {
  getAllSeminar: async (req, res) => {
    const seminar = await Seminar.find()

    res.json({
      message: "berhasil mendapatkan data seminar",
      data: seminar
    })
  },
  getSeminarById: async (req, res) => {
    const {id} = req.params
    const seminar = await Seminar.findById(id)

    res.json(seminar)
  },

  createSeminar: async (req, res) => {
    let data = req.body

    await Seminar.create(data)

    res.json({
      message: "berhasil membuat data seminar"
    })
  },
}