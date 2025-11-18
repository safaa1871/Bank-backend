const getAll = async (req, res) => {
  try {
    // Buraya ileride veritabanı sorgusu eklenebilir
    const invoices = []; // Örnek: boş liste
    res.status(200).json({
      success: true,
      message: "Tüm faturalar başarıyla listelendi",
      data: invoices
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Faturalar listelenirken bir hata oluştu",
      error: error.message
    });
  }
};

const create = async (req, res) => {
  try {
    const invoiceData = req.body;
    // Burada ileride veritabanına kaydetme işlemi yapılabilir
    res.status(201).json({
      success: true,
      message: "Fatura başarıyla oluşturuldu",
      data: invoiceData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Fatura oluşturulurken bir hata oluştu",
      error: error.message
    });
  }
};

module.exports = { getAll, create };
