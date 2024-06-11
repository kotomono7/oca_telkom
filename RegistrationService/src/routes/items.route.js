const express = require("express");
const router = express.Router();

const { getAllItems, addNewItem, getItemById, deleteItemById, updateItemById, getItemByColor } = require("../controllers/items.controller");

router.get("/", getAllItems);

router.get("/:id", getItemById);

router.post("/color", getItemByColor);

// router.post("/", addNewItem);

// router.put("/", updateItemById);

// router.delete("/:id", deleteItemById);

module.exports = router;