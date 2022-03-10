const { validatesExistingEmail } = require("../../../utils");
const { users, nextId } = require("../../../data/db");

function createUser(_, { data }) {
  const isEmailExists = validatesExistingEmail(data.email);

  if (isEmailExists) {
    throw new Error("Email already registered");
  }

  const newUser = {
    id: nextId(),
    profile_id: 1,
    status: "ENABLED",
    ...data,
  };

  users.push(newUser);

  return newUser;
}

module.exports = {
  createUser,
};
