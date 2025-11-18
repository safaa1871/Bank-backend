const express = require("express");
const router = express.Router();
const controller = require("../controllers/logController");
const auth = require("../middlewares/auth");

router.get("/", auth, controller.getLogs);

module.exports = router;
