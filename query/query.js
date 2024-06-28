const User = require('../model/db');

module.exports.read = async () => {
  const users = await User.findAll();
  return users;
};

module.exports.create = async (person) => {
  try {
    const user = await User.create({ name: person.name ,  age: person.age });
    return user;
  } catch (error) {
    console.log(error);
  }
};

module.exports.update = async (id, up) => {
  try {
    const updatedInfo = await User.update(
       up ,
      {
        where: {
          id: id,
        },
      }
    );
    return updatedInfo;
  } catch (error) {
    console.log(error);
  }
};

module.exports.deleteUser = async (id) => {
  await User.destroy({
    where: {
      id: id,
    },
  });
};
