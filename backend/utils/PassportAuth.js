const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/UserModel");
const passport = require("passport");
const dotenv = require("dotenv");
dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
      state: true,
    },
    (accessToken, refreshToken, profile, cb) => {
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          //The user is already registered
          return cb(null, existingUser);
        } else {
          //The user does not exist
          // create new user
          User.create({
            googleId: profile.id,
            name: profile._json.name,
            pic: profile._json.picture,
            email: profile._json.email,
          });
          return cb(null, User);
        }
      });
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
