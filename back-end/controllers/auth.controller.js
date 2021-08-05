const User = require("../models/user");
const bcrypt = require("bcrypt");

const loginWithEmail = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  console.log(user);
  if (!user) {
    res.status(400).json({
      success: false,
      error: "Wrong email",
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return res.status(400).json({
      success: false,
      error: "Wrong password",
    });

  accessToken = await user.generateToken();

  res.status(200).json({
    success: true,
    message: `Logged in successfully!`,
  });
  next;
};

module.exports = { loginWithEmail };
