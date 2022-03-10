const { users, nextId } = require("../data/db");

function validatesExistingEmail(email) {
  return users.some((user) => user.email === email);
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

function removeUser(_, { id }) {
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex < 0) return null;

  const userRemoved = users.splice(userIndex, 1);

  return userRemoved ? userRemoved[0] : null;
}

function updateUser(_, args) {
  const userIndex = users.findIndex((user) => user.id === args.id);

  if (userIndex < 0) return null;

  const user = {
    ...users[userIndex],
    ...args,
  };

  users.splice(userIndex, 1, user);

  return user;
}

module.exports = {
  newUser,
  removeUser,
  updateUser,
};
