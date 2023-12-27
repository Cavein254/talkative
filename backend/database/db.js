const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Mongodb connected running on ${conn.connection.host}`.cyan.underline
    );
  } catch (err) {
    console.error(err.red.underline);
    process.exit();
  }
};

module.exports = connectDB;
