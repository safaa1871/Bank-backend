const express = require("express");
const router = express.Router();

let users = [
  { id: 1, username: "ali", password: "1234" }
];

// Kayıt
router.post("/register", (req, res) => {
  const { username, password } = req.body;

  const exists = users.find(u => u.username === username);
  if (exists) return res.status(400).json({ error: "Kullanıcı zaten var" });

  const newUser = {
    id: users.length + 1,
    username,
    password
  };

  users.push(newUser);
  res.json(newUser);
});

// Login
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) return res.status(401).json({ error: "Geçersiz bilgiler" });

  res.json({ message: "Giriş başarılı", user });
});

module.exports = router;
