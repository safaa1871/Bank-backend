// controllers/cardController.js

const getAll = async (req, res) => {
  try {
    // Buraya ileride veritabanından kartları çekme kodu eklenebilir
    const cards = []; // Örnek: boş liste
    res.status(200).json({
      success: true,
      message: "Tüm kartlar başarıyla listelendi",
      data: cards
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Kartlar listelenirken bir hata oluştu",
      error: error.message
    });
  }
};

const create = async (req, res) => {
  try {
    const cardData = req.body;
    // Burada ileride veritabanına kaydetme işlemi yapılabilir
    res.status(201).json({
      success: true,
      message: "Kart başarıyla oluşturuldu",
      data: cardData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Kart oluşturulurken bir hata oluştu",
      error: error.message
    });
  }
};

module.exports = { getAll, create };
