const express = require("express");
const router = express.Router();

const { validation, ctrlWrapper } = require("../../middlewares");
const { registerSchema } = require("../../schemas/usersSchema/usersSchema");
const { register } = require("../../controllers/auth");

router.post("/register", validation(registerSchema), ctrlWrapper(register));

module.exports = router;
