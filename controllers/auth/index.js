const register = require("./register");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logOut = require("./logOut");
const updateSubscription = require("./updateSubscription");
const verify = require("./verify");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
  register,
  login,
  getCurrent,
  logOut,
  updateSubscription,
  verify,
  resendVerifyEmail,
};
