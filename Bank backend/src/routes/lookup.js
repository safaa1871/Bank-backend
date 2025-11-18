const express = require("express");
const router = express.Router();
const controller = require("../controllers/lookup");

router.get("/banks", controller.getBanks);
router.get("/cities", controller.getCities);

module.exports = router;
