const { Contact } = require("../../models");

const listContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const contacts = await Contact.find({ owner }, "-createdAt -updatedAt");
  res.json(contacts);
};

module.exports = listContacts;
