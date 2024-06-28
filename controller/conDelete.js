const { deleteUser } = require('../query/query');

module.exports.deleteId = (req, res) => {
  deleteUser(req.params.id);
  res.send('user deleted')
};
