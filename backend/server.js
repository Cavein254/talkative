const express = require("express");
const connectDB = require("./database/db");
const dotenv = require("dotenv");
const colors = require("colors");

dotenv.config();

connectDB();
const app = express();

app.get("/api/", (req, res) => {
  res.send("The api is running");
});

app.get("/api/chat/:id", (req, res) => {
  console.log(req.params);
});

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(` The server is running on ${PORT} `.bgMagenta.bold)
);
