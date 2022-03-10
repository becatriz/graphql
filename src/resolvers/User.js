const { profiles } = require("../data/db");

function salary(user) {
  return user.real_salary;
}

function profile(user) {
  // Relationship between two different data types
  const selected = profiles.find((profile) => profile.id === user.profile_id);

  return selected ? selected : null;
}

module.exports = {
  salary,
  profile,
};
