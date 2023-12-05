const express = require("express");
const route = express.Router();

const {
    getAllSeminar,
    getSeminarById,
    createSeminar,
  } = require("../controllers/seminar.controller");


route.get("/", getAllSeminar);
route.get("/:id", getSeminarById);
route.post("/", createSeminar);
 
module.exports = route;