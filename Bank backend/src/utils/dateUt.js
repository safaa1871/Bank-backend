module.exports = {
  today: () => new Date().toISOString().split("T")[0],
  now: () => new Date().toISOString()
};
