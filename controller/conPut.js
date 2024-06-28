const { update } = require('../query/query');

module.exports.updateUser = async (req, res) => {
  await update(req.params.id, req.body);
  res.send('user updated');
};
