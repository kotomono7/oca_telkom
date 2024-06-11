const express = require("express");
const router = express.Router();

const { addNewItem, updateItemById } = require("../controllers/items.controller");

router.post("/in", addNewItem);

router.post("/out", updateItemById);

module.exports = router;