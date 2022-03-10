const { users, profiles } = require("../../../data/db");

function user(_, { id }) {
  const selected = users.find((user) => user.id === id);
  return selected ? selected : null;
}
function getUsers() {
  return users;
}

function getUsersByProfile(_, { name }) {
  const profileSelected = profiles.find((profile) => profile.name === name);

  const usersSelectedByProfile = users.filter(
    (user) => user.profile_id === profileSelected.id
  );

  return usersSelectedByProfile;
}

module.exports = {
  user,
  getUsers,
  getUsersByProfile,
};
