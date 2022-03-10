const { users } = require("../data/db");

const NOT_FOUND = -1;

function findUserIndex(filter) {
  if (!filter) return NOT_FOUND;

  const { id, email } = filter;

  if (id) {
    return users.findIndex((user) => user.id === id);
  } else if (email) {
    return users.findIndex((user) => user.email === email);
  }

  return NOT_FOUND;
}

module.exports = {
  findUserIndex,
};
