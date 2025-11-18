const axios = require("axios");

exports.getExchangeRates = async (req, res) => {
  const url = `https://api.exchangerate.host/latest?base=USD`;
  const r = await axios.get(url);
  res.json(r.data.rates);
};

exports.getGoldPrice = async (req, res) => {
  const url = "https://metals-api.com/api/latest";
  const r = await axios.get(url, {
    params: {
      access_key: process.env.METALS_API_KEY,
      symbols: "XAU"
    }
  });

  res.json({ gold: r.data.rates.XAU });
};
