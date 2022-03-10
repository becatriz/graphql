const { users, nextId } = require("../data/db");

const NOT_FOUND = -1;

function validatesExistingEmail(email) {
  return users.some((user) => user.email === email);
}

function findUserIndex(filter) {
  if (!filter?.id) return NOT_FOUND;

  const { id, email } = filter;

  if (id) {
    return users.findIndex((user) => user.id === id);
  } else if (email) {
    return users.findIndex((user) => user.email === email);
  }

  return NOT_FOUND;
}

function newUser(_, { data }) {
  const isEmailExists = validatesExistingEmail(data.email);

  if (isEmailExists) {
    throw new Error("Email already registered");
  }

  const newUser = {
    id: nextId(),
    profile_id: 1,
    status: "ENABLED",
    ...data,
  };

  users.push(newUser);

  return newUser;
}

function removeUser(_, { filter }) {
  const userIndex = findUserIndex(filter);

  if (userIndex < 0) return null;

  const userRemoved = users.splice(userIndex, 1);

  return userRemoved ? userRemoved[0] : null;
}

function updateUser(_, { filter }) {
  const userIndex = findUserIndex(filter);

  if (userIndex < 0) return null;

  const user = {
    ...users[userIndex],
    ...filter,
  };

  users.splice(userIndex, 1, user);

  return user;
}

module.exports = {
  newUser,
  removeUser,
  updateUser,
};
