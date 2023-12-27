const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Mongodb connected running on ${conn.connection.host}`);
  } catch (err) {
    console.err(`Error :${err.message}`);
    process.exit();
  }
};

module.exports = connectDB;
