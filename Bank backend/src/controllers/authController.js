const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { nanoid } = require("nanoid");
const { db } = require("../database/db");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  await db.read();
  const exists = db.data.users.find(u => u.email === email);
  if (exists) return res.status(400).json({ message: "Email zaten kayıtlı" });

  const hashed = await bcrypt.hash(password, 10);

  const user = {
    id: nanoid(),
    name,
    email,
    password: hashed
  };

  db.data.users.push(user);
  await db.write();

  res.json({ message: "Kayıt başarılı" });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  await db.read();
  const user = db.data.users.find(u => u.email === email);
  if (!user) return res.status(400).json({ message: "Kullanıcı bulunamadı" });

  const correct = await bcrypt.compare(password, user.password);
  if (!correct) return res.status(400).json({ message: "Şifre yanlış" });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

  res.json({ token });
};
