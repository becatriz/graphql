const { profiles } = require("../data/db");

module.exports = {
  salary(user) {
    return user.real_salary;
  },

  profile(user) {
    // Relationship between two different data types
    const selected = profiles.find((profile) => profile.id === user.profile_id);

    return selected ? selected : null;
  },
};
