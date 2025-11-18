const router = require("express").Router();
const auth = require("../middlewares/authMiddleware");
const { transfer, history } = require("../controllers/transactionController");

router.post("/transfer", auth, transfer);
router.get("/history", auth, history);

module.exports = router;
