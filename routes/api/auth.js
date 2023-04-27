const express = require("express");
const router = express.Router();

const {
  validation,
  ctrlWrapper,
  authenticate,
  upload,
  updateAvatar,
} = require("../../middlewares");

const {
  registerSchema,
  loginSchema,
  emailSchema,
} = require("../../schemas/usersSchema/usersSchema");

const {
  register,
  login,
  getCurrent,
  logOut,
  updateSubscription,
  verify,
  resendVerifyEmail,
} = require("../../controllers/auth");

router.post("/register", validation(registerSchema), ctrlWrapper(register));
router.post("/login", validation(loginSchema), ctrlWrapper(login));
router.get("/current", authenticate, ctrlWrapper(getCurrent));
router.post("/logout", authenticate, ctrlWrapper(logOut));
router.patch("/", authenticate, ctrlWrapper(updateSubscription));
router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar);
router.get("/users/verify/:verificationToken", ctrlWrapper(verify));
router.post(
  "/users/verify",
  validation(emailSchema),
  ctrlWrapper(resendVerifyEmail)
);

module.exports = router;
