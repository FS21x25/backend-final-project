const express = require("express");
const route = express.Router();

const {
    getAllSertifikasi,
    getSertifikasiById,
    createSertifikasi,
  } = require("../controllers/sertifikasi.controller");


route.get("/", getAllSertifikasi);
route.get("/:id", getSertifikasiById);
route.post("/", createSertifikasi);

module.exports = route;