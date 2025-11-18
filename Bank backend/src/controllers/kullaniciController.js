// controllers/authController.js
const hash = require("../helpers/hashHelper");
const tokenHelper = require("../helpers/tokenHelper");

const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email ve şifre alanları zorunludur"
      });
    }

    // Şifreyi hash'le
    const hashedPassword = await hash.hashPassword(password);

    // Burada kullanıcıyı veritabanına kaydetme işlemi yapılabilir

    res.status(201).json({
      success: true,
      message: "Kullanıcı başarıyla oluşturuldu",
      data: { email, password: hashedPassword }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Kullanıcı oluşturulurken bir hata oluştu",
      error: error.message
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email ve şifre alanları zorunludur"
      });
    }

    // Burada veritabanından kullanıcıyı bulma ve şifre kontrolü yapılabilir
    // Örnek olarak kullanıcı ID 1 kabul edildi
    const token = tokenHelper.createToken({ id: 1, email });

    res.status(200).json({
      success: true,
      message: "Giriş başarılı",
      token
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Giriş yapılırken bir hata oluştu",
      error: error.message
    });
  }
};

module.exports = { register, login };
