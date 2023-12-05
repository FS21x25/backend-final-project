const express = require("express");
const route = express.Router();

const {
    getAllDeskripsi,
    getDesById,
    createDes,
  } = require("../controllers/des.controller");


route.get("/", getAllDeskripsi);
route.get("/:id", getDesById);
route.post("/", createDes);
 
module.exports = route;