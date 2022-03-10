const { profiles } = require("../../../data/db");

function getProfiles() {
  return profiles;
}

function profile(_, { id }) {
  const selected = profiles.find((profile) => profile.id === id);
  return selected ? selected : null;
}

module.exports = {
  getProfiles,
  profile,
};
