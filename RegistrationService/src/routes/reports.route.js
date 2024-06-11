const express = require("express");
const router = express.Router();

const { countItemByType } = require("../controllers/items.controller");

router.post("/type", countItemByType);

module.exports = router;