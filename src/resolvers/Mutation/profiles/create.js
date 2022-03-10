const { nextId, profiles } = require("../../../data/db");
const { validatesExistingProfile } = require("../../../utils");

function createProfile(_, { name }) {
  const isNameExists = validatesExistingProfile(name);

  if (isNameExists) {
    throw new Error("Profile already registered");
  }

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
