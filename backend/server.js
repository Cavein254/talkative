const express = require("express");
const connectDB = require("./database/db");
const dotenv = require("dotenv");
const colors = require("colors");
const passport = require("passport");
const userRouter = require("./routes/userRoute");
const cors = require("cors");
const cookieSession = require("cookie-session");
const passportAuth = require("./utils/PassportAuth");
const userAuth = require("./routes/userAuthRoute");

dotenv.config();

connectDB();
const app = express();
app.use(
  cookieSession({
    name: "socketSession",
    keys: ["socketinit"],
    maxAge: 60 * 60 * 24 * 45,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

app.use("/auth", userAuth);
app.use("/api/user", userRouter);
// app.use("/api/chat", chatRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(` The server is running on ${PORT} `.bgMagenta.bold)
);
