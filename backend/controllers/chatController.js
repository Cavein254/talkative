const asyncHandler = require('express-async-handler');
const Chat = require('../models/ChatModel');
const User = require('../models/UserModel');

const accessChats = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  if (!userId) {
    res.status(401).json({
      error: true,
      message: 'At least 1 person is required for a chat',
    });
  }

  let isChat = await Chat.find({
    isGroup: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user._id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate('users')
    .populate('latestMessage');

  isChat = await User.populate(isChat, {
    path: 'latestMessage.sender',
    select: 'name, pic, email',
  });

  if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    let chatData = {
      chatName: 'sender',
      isGroupChat: false,
      users: [req.user._id, userId],
    };

    try {
      const createdChat = await Chat.create(chatData);
      const fullChat = await Chat.findOne({ _id: createdChat._id }).populate(
        'users'
      );
      res.status(200).send(fullChat);
    } catch (err) {
      res.status(400);
      throw new Error(error.message);
    }
  }
});

const fetchChats = asyncHandler(async (req, res) => {
  try {
    Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
      .populate('users')
      .populate('groupAdmin')
      .populate('latestMessage')
      .sort({ updatedAt: -1 })
      .then(async (results) => {
        results = await User.populate(results, {
          path: 'latestMessage.sender',
          select: 'name email pic',
        });
        res.status(200).send(results);
      });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

const createGroupChat = asyncHandler(async (req, res) => {
  if (!req.body.users || !req.body.name) {
    res.status(400).send({
      message: 'please fill all the fields `groupname and atleast 2 users`',
    });
  }
  let users = req.body.users;

  if (users.length < 2) {
    res.status(400).json({
      error: true,
      message: 'A group chat requires more than 2 users',
    });
  }
  users.push(req.user);

  try {
    const groupExists = await Chat.findOne({ name: req.body.name });
    if (!groupExists) {
      try {
        const groupChat = await Chat.create({
          chatName: req.body.name,
          users: users,
          isGroup: true,
          groupAdmin: req.user,
        });
        const fullGroupChat = await Chat.findOne({ _id: groupChat._id })
          .populate('users')
          .populate('groupAdmin');
        res.status(200).json(fullGroupChat);
      } catch (err) {
        res.status(400);
        throw new Error(err.message);
      }
    }
    const fullGroupChat = await Chat.findOne({ _id: groupExists._id })
      .populate('users')
      .populate('groupAdmin');
    res.status(200).json(fullGroupChat);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

const renameGroupChat = asyncHandler(async (req, res) => {
  const { chatId, chatName } = req.body;
  const updatedChat = await Chat.findByIdAndUpdate(
    chatId,
    {
      chatName,
    },
    { new: true }
  )
    .populate('users')
    .populate('groupAdmin');

  if (!updatedChat) {
    res.status(404);
    throw new Error('Chat Update Failed');
  } else {
    res.json(updatedChat);
  }
});

const addToGroupChat = asyncHandler(async (req, res) => {
  const { chatId, userId } = req.body;

  const added = Chat.findByIdAndUpdate(
    chatId,
    {
      $push: { users: userId },
    },
    { new: true }
  )
    .populate('user')
    .populate('groupAdmin');

  if (!added) {
    res.status(400);
    throw new Error('Chat not Found');
  } else {
    res.json(added);
  }
});

const leaveGroupChat = asyncHandler(async (req, res) => {
  const { chatId, userId } = req.body;

  const removed = Chat.findByIdAndUpdate(
    chatId,
    {
      $pull: { users: userId },
    },
    { new: true }
  )
    .populate('user')
    .populate('groupAdmin');

  if (!removed) {
    res.status(400);
    throw new Error('Chat not Found');
  } else {
    res.json({ error: 'false', message: 'successfully Removed from chat' });
  }
});

module.exports = {
  accessChats,
  fetchChats,
  createGroupChat,
  renameGroupChat,
  addToGroupChat,
  leaveGroupChat,
};
