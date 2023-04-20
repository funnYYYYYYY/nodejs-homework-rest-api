const fs = require("fs/promises");
const path = require("path");
const { User } = require("../models");

const avatarsDir = path.join(__dirname, "../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, filename } = req.file;
  const avatarName = `${_id}_${filename}`;

  const resultUpdate = path.join(avatarsDir, avatarName);

  await fs.rename(tempUpload, resultUpdate);
  const avatarURL = path.join("avatars", avatarName);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({ avatarURL });
};

module.exports = updateAvatar;
