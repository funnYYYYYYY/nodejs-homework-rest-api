const validation = require("./validation");
const ctrlWrapper = require("./ctrlWrapper");
const isValidId = require("./isValidId");
const authenticate = require("./authenticate");
const upload = require("./upload");
const fileTransfer = require("./fileTransfer");

module.exports = {
  validation,
  ctrlWrapper,
  isValidId,
  authenticate,
  upload,
  fileTransfer,
};
