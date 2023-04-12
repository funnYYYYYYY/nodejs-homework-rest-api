const express = require("express");
const router = express.Router();

const { validation, ctrlWrapper } = require("../../middlewares");
const { schemas } = require("../../models/user");
const { register } = require("../../controllers/auth");

router.post(
  "/register",
  validation(schemas.registerSchema),
  ctrlWrapper(register)
);

module.export = router;
