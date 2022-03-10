const { profiles } = require("../../../data/db");

function updateProfile(_, args) {
  const profileIndex = profiles.find((profile) => profile.id === args.id);

  if (profileIndex < 0) return null;

  const profile = {
    ...profiles[profileIndex],
    ...args,
  };

  profiles.splice(profileIndex, 1, profile);

  return profile;
}

module.exports = {
  updateProfile,
};
