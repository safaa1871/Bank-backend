const express = require("express");
const router = express.Router();

router.get("/usd-to-try/:amount", (req, res) => {
  const amount = Number(req.params.amount);
  const rate = 34.2; // örnek sabit kur

  res.json({
    amount,
    rate,
    result: amount * rate
  });
});

module.exports = router;
