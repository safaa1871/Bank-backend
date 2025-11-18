// controllers/staticDataController.js

const getBanks = async (req, res) => {
  try {
    const banks = ["Ziraat", "Garanti", "İş Bankası", "Akbank"];
    res.status(200).json({
      success: true,
      message: "Bankalar listelendi",
      data: banks
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Bankalar listelenirken bir hata oluştu",
      error: error.message
    });
  }
};

const getCities = async (req, res) => {
  try {
    const cities = ["İstanbul", "Ankara", "İzmir"];
    res.status(200).json({
      success: true,
      message: "Şehirler listelendi",
      data: cities
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Şehirler listelenirken bir hata oluştu",
      error: error.message
    });
  }
};

module.exports = { getBanks, getCities };
