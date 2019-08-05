const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api");
const routes = require("./routes");

bee05e661788e7449ff970488d811bb96b4132e6

//***lines below are required for authenication***//

const passport = require("passport");
const GoogleStategy = require('passport-google-oauth20').Strategy;
const cookieSession = require("cookie-session");
const auth = require("./routes/api/auth");
const keys = require('./config/keys');

//required for authentication ORDER IS IMPORTANT//
require('./model/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);
const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes') (app);

//console.developers.google.com
passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
// client ID hidden
// Client Secret hidden

    callbackURL: '/auth/google/callback'
  }, 
  (accessToken, refreshToken, profile, done) => {
    console.log('access token', accessToken);
    console.log('refresh token', refreshToken);
    console.log('profile:', profile);
  }
 )
);

const app = express();
const PORT = process.env.PORT || 5000;

// Defining middleware.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on Heroku).
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view.
app.use("/api",routes);

app.use(routes);
bee05e661788e7449ff970488d811bb96b4132e6
// Connect to the Mongo DB.  This is now in connection-config.js
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/retirementDB");
cookieKey: "Group4_Rocks"

// Start the server.
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});