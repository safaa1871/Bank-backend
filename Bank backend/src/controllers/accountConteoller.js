const { nanoid } = require("nanoid");
const { db } = require("../database/db");

exports.createAccount = async (req, res) => {
  const { currency } = req.body;

  const account = {
    id: nanoid(),
    userId: req.user.id,
    balance: 0,
    currency,
    accountNumber: Math.floor(Math.random() * 1e10).toString()
  };

  await db.read();
  db.data.accounts.push(account);
  await db.write();

  res.json({ message: "Hesap oluşturuldu", account });
};

exports.getAccounts = async (req, res) => {
  await db.read();
  const list = db.data.accounts.filter(a => a.userId === req.user.id);
  res.json(list);
};
