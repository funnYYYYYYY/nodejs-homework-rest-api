const express = require("express");
const router = express.Router();

const { validation, ctrlWrapper, authenticate } = require("../../middlewares");
const {
  registerSchema,
  loginSchema,
} = require("../../schemas/usersSchema/usersSchema");
const {
  register,
  login,
  getCurrent,
  logOut,
  updateSubscription,
} = require("../../controllers/auth");

router.post("/register", validation(registerSchema), ctrlWrapper(register));
router.post("/login", validation(loginSchema), ctrlWrapper(login));
router.get("/current", authenticate, ctrlWrapper(getCurrent));
router.post("/logout", authenticate, ctrlWrapper(logOut));
router.patch("/", authenticate, ctrlWrapper(updateSubscription));

module.exports = router;
