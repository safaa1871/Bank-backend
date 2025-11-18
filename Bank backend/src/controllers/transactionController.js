const { nanoid } = require("nanoid");
const { db } = require("../database/db");

exports.transfer = async (req, res) => {
  const { fromAccountId, toAccountNumber, amount } = req.body;
  const amt = Number(amount);

  await db.read();

  const from = db.data.accounts.find(a => a.id === fromAccountId && a.userId === req.user.id);
  if (!from) return res.status(400).json({ message: "Gönderen hesap bulunamadı" });

  const to = db.data.accounts.find(a => a.accountNumber === toAccountNumber);
  if (!to) return res.status(400).json({ message: "Alıcı bulunamadı" });

  if (from.balance < amt) return res.status(400).json({ message: "Yetersiz bakiye" });

  from.balance -= amt;
  to.balance += amt;

  const tx = {
    id: nanoid(),
    from: from.id,
    to: to.id,
    amount: amt,
    date: new Date().toISOString()
  };

  db.data.transactions.push(tx);
  await db.write();

  res.json({ message: "Transfer başarılı", tx });
};

exports.history = async (req, res) => {
  await db.read();
  const accounts = db.data.accounts.filter(a => a.userId === req.user.id).map(a => a.id);
  const txs = db.data.transactions.filter(t => accounts.includes(t.from) || accounts.includes(t.to));
  res.json(txs);
};
