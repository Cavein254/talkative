const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");

const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};
  console.log("On all users");
  console.log(req.headers);
  console.log(req.user);
  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.status(201).send(users);
});

module.exports = { allUsers };
