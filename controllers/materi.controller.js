const Materi = require('../models/materi');

module.exports = {
  getAllMateri: async (req, res) => {
    try {
      const materies = await Materi.find();
      res.json(materies);
    } catch (error) {
      res.status(500).json({ error: 'Gagal mendapatkan data materi' });
    }
  },
};
