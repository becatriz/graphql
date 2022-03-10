const Profile = require("./profiles");
const User = require("./users");

module.exports = {
  ...Profile,
  ...User,
};
