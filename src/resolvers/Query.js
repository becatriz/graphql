const { users, profiles } = require("../data/db");

function currentTime() {
  return new Date();
}

function loggedInUser() {
  return {
    id: 1,
    name: "Rebeca",
    email: "beca@gmail.com",
    age: 29,
    real_salary: 10.0,
    vip: true,
  };
}

function featuredProduct() {
  return {
    name: "Celular",
    price: 1.5,
    discount: 0.15,
  };
}

function lotteryNumbers() {
  const ascendingOrder = (a, b) => a - b;
  return new Set(
    Array(6)
      .fill(0)
      .map((n) => parseInt(Math.random() * 60 + 1))
      .sort(ascendingOrder)
  );
}

function getUsers() {
  return users;
}

function user(_, { id }) {
  const selected = users.find((user) => user.id === id);
  return selected ? selected : null;
}

function getProfiles() {
  return profiles;
}

function profile(_, { id }) {
  const selected = profiles.find((profile) => profile.id === id);
  return selected ? selected : null;
}

module.exports = {
  currentTime,
  featuredProduct,
  loggedInUser,
  lotteryNumbers,
  profile,
  getProfiles,
  user,
  getUsers,
};
