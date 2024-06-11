const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Registration Service v1.0")
});

module.exports = router;