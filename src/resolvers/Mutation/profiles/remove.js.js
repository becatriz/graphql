const { profiles } = require("../../../data/db");

function removeProfile(_, { id }) {
  const profileIndex = profiles.find((profile) => profile.id === id);

  if (profileIndex < 0) return null;

  const profileRemoved = profiles.splice(profileIndex, 1);

  return profileRemoved ? profileRemoved[0] : null;
}

module.exports = {
  removeProfile,
};
