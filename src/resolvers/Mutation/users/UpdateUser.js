const { users } = require("../../../data/db");
const { findUserIndex } = require("../../../utils/index");

function updateUser(_, { filter, data }) {
  const userIndex = findUserIndex({ ...filter });

  if (userIndex < 0) return null;

  const user = {
    ...users[userIndex],
    ...data,
  };

  users.splice(userIndex, 1, user);

  return user;
}

module.exports = {
  updateUser,
};
