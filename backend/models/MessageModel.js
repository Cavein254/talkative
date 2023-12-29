const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const MessageModel = mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    content: {
      type: String,
      trim: true,
    },
    chat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Chat',
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.Schema('Message', MessageModel);

module.exports = Message;
