const { users, profiles } = require("../../../data/db");

function getUsers() {
  return users;
}

function user(_, { id }) {
  const selected = users.find((user) => user.id === id);
  return selected ? selected : null;
}

function getProfiles() {
  return profiles;
}

function profile(_, { id }) {
  const selected = profiles.find((profile) => profile.id === id);
  return selected ? selected : null;
}

module.exports = {
  profile,
  getProfiles,
  user,
  getUsers,
};
