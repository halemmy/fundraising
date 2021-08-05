const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User must have a name"],
      trim: true,
      minLength: 3,
    },
    email: {
      type: String,
      required: [true, "User must have an email"],
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "User must have a password"],
    },
  },
  { timestamps: true },
  { token: String }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, saltRounds);
  next();
});

userSchema.methods.toJSON = function () {
  const obj = this._doc;
  delete obj.password;
  delete obj.__v;
  return obj;
};

userSchema.methods.generateToken = function () {
  const user = this;
  const token = jwt.sign({ id: user._id }, JWT_SECRET_KEY, {
    expiresIn: "7d",
  });
  return token;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
