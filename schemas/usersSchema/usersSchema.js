const Joi = require("joi");

const registerSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": "Missing required name field" }),
  email: Joi.string()
    .required()
    .pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    .messages({ "any.required": "Missing required email field" }),
  password: Joi.string().required().min(6),
});

const loginSchema = Joi.object({
  email: Joi.string()
    .required()
    .messages({ "any.required": "Missing required name field" }),
  password: Joi.string().required().min(6),
});

const emailSchema = Joi.object({
  email: Joi.string()
    .required()
    .messages({ "any.required": "Missing required name field" }),
});

module.exports = {
  registerSchema,
  loginSchema,
  emailSchema,
};
