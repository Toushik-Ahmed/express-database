const { read } = require('../query/query');

module.exports.getAllUsers = async (req, res) => {
  const allUsers = await read();
  res.send(allUsers);
};
