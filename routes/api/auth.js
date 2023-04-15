const express = require("express");
const router = express.Router();

const { validation, ctrlWrapper } = require("../../middlewares");
const {
  registerSchema,
  loginSchema,
} = require("../../schemas/usersSchema/usersSchema");
const { register, login } = require("../../controllers/auth");

router.post("/register", validation(registerSchema), ctrlWrapper(register));
router.post("/login", validation(loginSchema), ctrlWrapper(login));

module.exports = router;
