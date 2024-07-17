const express = require("express");
const cardataController = require("../controllers/cardataController");

const router = express.Router();

router.post("/", cardataController.createCardata);

router.get("/", cardataController.getAllCardatas);

router.get("/:id", cardataController.getCardataById);

router.patch("/:id", cardataController.updateCardata);

module.exports = router;
