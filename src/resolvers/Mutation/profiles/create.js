const { nextId, profiles } = require("../../../data/db");

function createProfile(_, { name }) {
  const newProfile = {
    id: nextId(),
    name: name,
  };

  profiles.push(newProfile);

  return newProfile;
}

module.exports = {
  createProfile,
};
