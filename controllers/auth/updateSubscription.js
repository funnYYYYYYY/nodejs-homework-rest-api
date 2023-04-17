const { User } = require("../../models");

const updateSubscription = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = req.body;
  const validSubscriptions = ["starter", "pro", "business"];

  if (!validSubscriptions.includes(subscription)) {
    return res.status(400).json({ message: "Invalid subscription type" });
  }

  const updatedUser = await User.findByIdAndUpdate(
    _id,
    { subscription },
    { new: true }
  );
  res.status(200).json(updatedUser);
};

module.exports = updateSubscription;
