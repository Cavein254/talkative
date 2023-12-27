const express = require("express");
const connectDB = require("./database/db");
const dotenv = require("dotenv");
const colors = require("colors");
const userRouter = require("./routes/userRoute");
dotenv.config();

connectDB();
const app = express();
app.use(express.json());

app.use("/api/user/", userRouter);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(` The server is running on ${PORT} `.bgMagenta.bold)
);
