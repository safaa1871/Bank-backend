module.exports = {
  generateIBAN: () =>
    "TR" + Math.floor(1000000000000000 + Math.random() * 9000000000000000)
};
