const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Parking Lot Service v1.0")
});

module.exports = router;