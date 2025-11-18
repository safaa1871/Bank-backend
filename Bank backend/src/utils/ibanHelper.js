module.exports = {
  isValidIBAN: (iban) => iban.startsWith("TR") && iban.length === 18
};
