const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");

const allUsers = asyncHandler(async (req, res) => {
  console.log(req.user);
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};
  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.status(201).send(users);
});

module.exports = { allUsers };
