const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api-routes");
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
app.use(routes);

// Connect to the Mongo DB.  This is now in connection-config.js
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/retirementDB");

// Start the server.
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});