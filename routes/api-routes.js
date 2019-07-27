// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Scenarios = require("../models/scenarios.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Search for Specific Character (or all characters) then provides JSON
  /* app.get("/api/:characters?", function(req, res) {
    if (req.params.characters) {
      // Display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)
      Character.findOne({
        where: {
          routeName: req.params.characters
        }
      }).then(function(result) {
        return res.json(result);
      });
    } else {
      Character.findAll().then(function(result) {
        return res.json(result);
      });
    }
  }); */

  // If a user sends data to add a new scenario...
  app.post("/api/new", function(req, res) {
    // Take the request...
    var scenario= req.body;

    // Create a routeName

    // Using a RegEx Pattern to remove spaces from scenario.userName
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // var routeName = scenario.userName.replace(/\s+/g, "").toLowerCase();

    // Then add the scenario to the database using Sequelize
    Scenarios.create({
      // routeName: routeName,
      user_name: scenario.userName,
      total_assets: scenario.totalAssets,
      income_in_retirement: scenario.incomeInRetirement,
      retirement_age: scenario.retirementAge,
      target_city: scenario.targetCity
    });

    res.status(204).end();
  });
};
