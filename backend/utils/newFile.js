const User = require("../models/UserModel");
const passport = require("passport");
const { GoogleStrategy } = require("./PassportAuth");

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
          //The user already exists
          console.log("The user is here");
          console.log(existingUser);
          return cb(null, existingUser);
        } else {
          console.log("New user registration");
          User.create({
            googleId: profile.id,
            name: profile._json.name,
            pic: profile._json.picture,
            email: profile._json.email,
          });
          cb(null, User);
        }
        cb(null, profile);
      });

      passport.serializeUser((user, done) => {
        done(null, user);
      });

      passport.deserializeUser((user, done) => {
        done(null, user);
      });
    }
  )
);
