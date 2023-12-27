const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");
const generateToken = require("../utils/tokenGenerator");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Name, email and password cannot be empty");
  }

  const user = await User.findOne({ email });

  if (user) {
    res.status(400).json({ Error: "The user already exists" });
  }

  const newUser = await User.create({
    name,
    email,
    pic,
    password,
  });

  if (newUser) {
    res.status(201).json({
      id: newUser._id,
      name: newUser.name,
      pic: newUser.pic,
      email: newUser.email,
      token: generateToken(newUser._id),
    });
  }
});

module.exports = { registerUser };
