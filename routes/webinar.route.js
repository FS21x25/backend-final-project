const express = require("express");
const route = express.Router();

const {
    getAllWebinar,
    getWebinarById,
    createWebinar,
  } = require("../controllers/webinar.controller");


route.get("/", getAllWebinar);
route.get("/:id", getWebinarById);
route.post("/", createWebinar);
 
module.exports = route;