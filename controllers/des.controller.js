const Des = require('../models/des');

module.exports = {
  getAllDeskripsi: async (req, res) => {
    const des = await Des.find()

    res.json({
      message: "berhasil mendapatkan data deskripsi event",
      data: des
    })
  },
  getDesById: async (req, res) => {
    const {id} = req.params
    const des = await Des.findById(id)

    res.json(des)
  },

  createDes: async (req, res) => {
    let data = req.body

    await Des.create(data)

    res.json({
      message: "berhasil membuat deskripsi event"
    })
  },
}