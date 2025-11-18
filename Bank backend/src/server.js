const https = require("https");
const fs = require("fs");
const app = require("./app");

const PORT = 3000;

// SSL Sertifika Okuma
const sslOptions = {
  key: fs.readFileSync("./config/ssl/server.key"),
  cert: fs.readFileSync("./config/ssl/server.crt"),
};

https.createServer(sslOptions, app).listen(PORT, () => {
  console.log(`HTTPS Server running at: https://localhost:${PORT}`);
});

