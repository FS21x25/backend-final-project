const Sertifikasi = require('../models/sertifikasi');

module.exports = {
  getAllSertifikasi: async (req, res) => {
    const sertifikasi = await Sertifikasi.find()

    res.json({
      message: "berhasil mendapatkan data sertifikasi",
      data: sertifikasi
    })
  },
  getSertifikasiById: async (req, res) => {
    const {id} = req.params
    const sertifikasi = await Sertifikasi.findById(id)

    res.json(sertifikasi)
  },

  createSertifikasi: async (req, res) => {
    let data = req.body

    await Sertifikasi.create(data)

    res.json({
      message: "berhasil membuat data sertifikasi"
    })
  },
}