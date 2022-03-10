const { users } = require("../data/db");

function validatesExistingEmail(email) {
  return users.some((user) => user.email === email);
}

module.exports = {
  validatesExistingEmail,
};
