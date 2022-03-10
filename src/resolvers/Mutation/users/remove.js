const { users } = require("../../../data/db");
const { findIndex } = require("../../../utils");

function removeUser(_, { filter }) {
  const userIndex = findIndex(filter);

  if (userIndex < 0) return null;

  const userRemoved = users.splice(userIndex, 1);

  return userRemoved ? userRemoved[0] : null;
}

module.exports = {
  removeUser,
};
