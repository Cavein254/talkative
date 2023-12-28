const asyncHandler = require("express-async-handler");
const Chat = require("../models/ChatModel");

const accessChats = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  if (!userId) {
    console.log("Userid not provided");
    res.status(401).json({
      error: true,
      message: "Unauthorized",
    });
  }

  var isChat = await Chat.find({
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user._id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate("users", "-password")
    .populate("latestMessage");

  isChat = await User.populate(isChat, {
    path: "latestMessage.sender",
    select: "name, pic, email",
  });

  if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    var chatData = {
      chatName: sender,
      isGroupChat: false,
      users: [req.user._id, userId],
    };

    try {
      const createdChat = await Chat.create(chatData);
      const fullChat = await Chat.findOne({ _id: createdChat._id }).populate(
        "users",
        "-password"
      );
      res.status(200).send(fullChat);
    } catch (err) {
      res.status(400);
      throw new Error(error.message);
    }
  }
});

module.exports = { accessChats };
