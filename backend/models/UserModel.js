const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      default:
        "https://w7.pngwing.com/pngs/227/909/png-transparent-pokemon-charmander-pokemon-go-pikachu-ash-ketchum-charmander-pokemon-orange-fictional-character-cartoon-thumbnail.png",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
