const { HttpError, sendEmail } = require("../../helpers");
const { User } = require("../../models");
const { BASE_URL } = process.env;

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(404);
  }

  if (user.verify) {
    throw HttpError(400, "Verification has already been passed");
  }
  const verifyMail = {
    to: email,
    subject: "Verify email",
    html: `<a target ="_blank" href = "${BASE_URL}/api/auth/${user.verificationToken}"> Click verify email</a>`,
  };

  await sendEmail(verifyMail);

  res.json({
    message: "Verification email sent",
  });
};

module.exports = resendVerifyEmail;
