const expressAsyncHandler = require("express-async-handler");
const User = require("../models/UserModel");

const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Name, email and password cannot be empty");
  }

  const user = await User.findOne({ email });

  if (user) {
    res.status(400);
    throw new Error("The user already exists");
  }

  const newUser = await User.create({
    name,
    email,
    pic,
    password,
  });

  if (newUser) {
    res.status(201).json({
      id: user._id,
      name: user.name,
      pic: user.pic,
      email: user.email,
    });
  }
});
