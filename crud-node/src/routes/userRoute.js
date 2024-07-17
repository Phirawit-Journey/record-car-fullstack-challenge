const express = require("express");
const cardataController = require("../controllers/cardataController");

const router = express.Router();

router.post("/", cardataController.createCardata);

module.exports = router;
