const { create } = require('../query/query');

module.exports.postContent = async (req, res) => {
  try {
    const user = req.body;
    await create(user);
    res.send('user created');
  } catch (error) {
    console.log(error);
  }
};
