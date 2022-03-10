const { users } = require("../data/db");

function validatesExistingEmail(email) {
  return users.some((user) => user.email === email);
}

function validatesExistingProfile(profileName) {
  return users.some((user) => user.name === profileName);
}

module.exports = {
  validatesExistingEmail,
  validatesExistingProfile,
};
