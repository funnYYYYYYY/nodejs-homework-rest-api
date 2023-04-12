const { Contact } = require("../../models");
// const HttpError = require("../../helpers");

const register = async (req, res) => {
  const newUser = await Contact.create(req.body);

  res.json = {
    email: newUser.email,
    name: newUser.name,
  };
};

module.exports = register;
