const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleValidationError } = require("../helpers");

const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
      minlength: 6,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: emailRegexp,
    },

    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },

    token: String,

    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },

  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleValidationError);

const registerSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": "Missing required name field" }),
  email: Joi.string()
    .required()
    .pattern(emailRegexp)
    .messages({ "any.required": "Missing required email field" }),
  password: Joi.string().required().min(6),
});

const loginSchema = Joi.object({
  email: Joi.string()
    .required()
    .messages({ "any.required": "Missing required name field" }),
  password: Joi.string().required().min(6),
});

const schemas = {
  registerSchema,
  loginSchema,
};

const User = model("contact", userSchema);

module.exports = { User, schemas };
