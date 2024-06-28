const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
});
User.syncTable = async () => {
  try {
    await sequelize.sync();
    console.log('User table synced successfully');
  } catch (error) {
    console.log(error);
  }
};

module.exports = User;
