module.exports = (err, req, res, next) => {
  console.error("HATA:", err);
  res.status(500).json({ error: "Sunucu hatası" });
};
