const express = require("express");
const router = express.Router();
const controller = require("../controllers/faturaController");
const auth = require("../middlewares/auth");

router.get("/", auth, controller.getAll);
router.post("/", auth, controller.create);

module.exports = router;
