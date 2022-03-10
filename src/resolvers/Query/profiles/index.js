const { profiles } = require("../../../data/db");

function getProfiles() {
  return profiles;
}

function profile(_, { id, name }) {
  const selected = profiles.find(
    (profile) => profile.id === id || profile.name === name
  );
  return selected ? selected : null;
}

module.exports = {
  getProfiles,
  profile,
};
