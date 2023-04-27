const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SECRET_API_KEY, MY_EMAIL } = process.env;

sgMail.setApiKey(SECRET_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: MY_EMAIL };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;
