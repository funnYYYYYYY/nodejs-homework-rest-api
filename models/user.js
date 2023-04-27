const { Schema, model } = require("mongoose");

const { handleValidationError } = require("../helpers");

const listSubscriptions = ["starter", "pro", "business"];

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
      minlength: 6,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },

    subscription: {
      type: String,
      enum: listSubscriptions,
      default: "starter",
    },

    token: String,
    avatarURL: {
      type: String,
      required: [true],
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },

  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleValidationError);

const User = model("user", userSchema);

module.exports = User;
