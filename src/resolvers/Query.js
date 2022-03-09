const { users, profiles } = require("../data/db");

module.exports = {
  currentTime() {
    return new Date();
  },
  loggedInUser() {
    return {
      id: 1,
      name: "Rebeca",
      email: "beca@gmail.com",
      age: 29,
      real_salary: 10.0,
      vip: true,
    };
  },
  featuredProduct() {
    return {
      name: "Celular",
      price: 1.5,
      discount: 0.15,
    };
  },
  lotteryNumbers() {
    const ascendingOrder = (a, b) => a - b;
    return new Set(
      Array(6)
        .fill(0)
        .map((n) => parseInt(Math.random() * 60 + 1))
        .sort(ascendingOrder)
    );
  },
  users() {
    return users;
  },
  user(_, { id }) {
    const selected = users.find((user) => user.id === id);
    return selected ? selected : null;
  },
  profiles() {
    return profiles;
  },
  profile(_, { id }) {
    const selected = profiles.find((profile) => profile.id === id);
    return selected ? selected : null;
  },
};
