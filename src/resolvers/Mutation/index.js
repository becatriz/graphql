const Users = require("./users");
const Profiles = require("./profiles");

module.exports = {
  ...Users,
  ...Profiles,
};
