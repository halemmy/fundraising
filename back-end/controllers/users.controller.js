const User = require("../models/user");

const createUser = async (req, res) => {
  try {
    // res.status(200).json({ foo: "bar" });
    const { name, email, password } = req.body;
    console.log({ foo: req.body });

    const user = new User({ name, email, password });

    await user.save();
    res.status(201).json({
      success: true,
      data: user,
      message: `User ${user.name} created`,
    });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

const getUserInfo = async (req, res) => {
  const userId = req.userId;
  const user = await User.findById(userId);
  if (!user)
    return res.status(400).json({
      success: false,
      error: "User not found",
    });

  return res.status(200).json({
    succes: true,
    data: { user },
    message: "User ${user.id} found!",
  });
};

const editUser = async (req, res) => {
  const userId = req.userId;
  const user = await User.findByIdAndUpdate(
    userId,
    { name: req.body.name, password: req.body.password, email: req.body.email },
    { new: true }
  );
  res.send(user);
};

const getCurrentUser = async (req, res, next) => {
  const userId = req.userId;
  const user = await User.findById(userId);
  if (!user)
    return res.status(400).json({ success: false, error: "User not found!" });
  return res.status(200).json({
    success: true,
    data: user,
    message: "Get current user successfully!",
  });
};

module.exports = {
  createUser,
  getUserInfo,
  editUser,
  getCurrentUser,
};
