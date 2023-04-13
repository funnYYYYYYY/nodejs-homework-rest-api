const { Schema, model } = require("mongoose");

const { handleValidationError } = require("../helpers");

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

const User = model("user", userSchema);

module.exports = User;
