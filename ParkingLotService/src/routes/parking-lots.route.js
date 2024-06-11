const express = require("express");
const router = express.Router();

const {
    getAvailableParkingLots,
} = require("../controllers/parking-lots.controller");

router.post("/", getAvailableParkingLots);

module.exports = router;