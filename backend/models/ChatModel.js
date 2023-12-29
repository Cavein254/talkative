const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const chatModel = mongoose.Schema(
  {
    chatName: { type: String, trim: true, unique: true, index: true },
    isGroup: { type: Boolean, default: false },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Message',
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model('Chats', chatModel);

module.exports = Chat;
