const express = require("express");
const app = express();

app.use(express.json());

// ROUTES
app.use("/api/fatura", require("./routes/fatura"));
app.use("/api/hesap", require("./routes/hesap"));
app.use("/api/islem", require("./routes/islem"));
app.use("/api/kart", require("./routes/kart"));
app.use("/api/kullanici", require("./routes/kullanici"));
app.use("/api/log", require("./routes/log"));
app.use("/api/lookup", require("./routes/lookup"));

// ERROR HANDLER
const errorHandler = require("./middlewares/errorHandler");
app.use(errorHandler);

module.exports = app;
