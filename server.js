const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api");
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

const PORT = process.env.PORT || 5000;

// Defining middleware.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on Heroku).
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes.
app.use("/api",routes);

// Connect to the Mongo DB.  This is now in connection-config.js
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/retirementDB");
cookieKey: keys.cookieKey,

// Start the server.
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// app.get(
//   '/auth/google', 
//   passport.authenticate('google', {
//        scope: ['profile', 'email']
// })
// );