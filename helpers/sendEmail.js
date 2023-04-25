const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SECRET_API_KEY, MY_EMAIL } = process.env;

sgMail.setApiKey(SECRET_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: MY_EMAIL };
  await sgMail.send(email);
  return true;
};

// const emailSend = {
//   to: "hotovi8617@meidecn.com",
//   from: "MY_EMAIL",
//   subject: " Hm - 6",
//   html: `<p> Home Work 6 - Test verify Email </p>`,
// };

// sendEmail(emailSend)
//   .then(() => console.log("Email send success"))
//   .catch((error) => console.log(error.message));

module.exports = sendEmail;
