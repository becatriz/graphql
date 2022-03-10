const { users } = require("../../../data/db");

function getUsers() {
  return users;
}

function user(_, { id }) {
  const selected = users.find((user) => user.id === id);
  return selected ? selected : null;
}

module.exports = {
  user,
  getUsers,
};
