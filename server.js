// Dependencies
var express = require("express");

// Require models for syncing.
// var db = require("../project3/models");

// Set up the Express App.
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// db.sequelize.sync().then(function () {
//     app.listen(PORT, function () {
//         console.log("Listening on port %s", PORT);
//     });
// });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  