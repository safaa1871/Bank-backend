const express = require("express");
const router = express.Router();

// Sahte DB (yerine gerçek DB bağlarsın)
let accounts = [
  { id: 1, userId: 1, balance: 1000 },
  { id: 2, userId: 2, balance: 500 }
];

// Hesapları listele
router.get("/", (req, res) => {
  res.json(accounts);
});

// Hesap oluştur
router.post("/", (req, res) => {
  const { userId } = req.body;
  const newAccount = {
    id: accounts.length + 1,
    userId,
    balance: 0
  };

  accounts.push(newAccount);
  res.json(newAccount);
});

// Para yatır
router.post("/:id/deposit", (req, res) => {
  const id = parseInt(req.params.id);
  const { amount } = req.body;

  const account = accounts.find(a => a.id === id);
  if (!account) return res.status(404).json({ error: "Hesap bulunamadı" });

  account.balance += amount;
  res.json(account);
});

// Para çek
router.post("/:id/withdraw", (req, res) => {
  const id = parseInt(req.params.id);
  const { amount } = req.body;

  const account = accounts.find(a => a.id === id);
  if (!account) return res.status(404).json({ error: "Hesap bulunamadı" });

  if (account.balance < amount)
    return res.status(400).json({ error: "Yetersiz bakiye" });

  account.balance -= amount;
  res.json(account);
});

module.exports = router;
