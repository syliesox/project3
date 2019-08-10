const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api");

//***lines below are required for authenication***//
const bodyParser = require('body-parser');
const cookieSession = require("cookie-session");
const keys = require('./config/keys');

//required for authentication ORDER IS IMPORTANT//
require('./db/models/User');


mongoose.connect(keys.mongoURI);
const app = express();
var path = require("path");
const PORT = process.env.PORT || 5000;

// Defining middleware.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on Heroku).
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, '/client/build')));
}
// Add routes, both API and view.
app.use("/api", routes);
require('./services/passport')(app);
require('./routes/authRoutes')(app);

if (process.env.NODE_ENV === "production") {
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/client/build/index.html'));
  });
}


// Connect to the Mongo DB.  This is now in connection-config.js
// mongoose.connect(process.env.MONGODB_URI || "mongodb://user1:password1@ds161517.mlab.com:61517/heroku_217tj3z4");

// Start the server.
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});