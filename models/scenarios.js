// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Scenarios" model that matches up with DB
var Scenarios = sequelize.define('scenarios', {
    // routeName: Sequelize.STRING,
    user_name: Sequelize.STRING,
    total_assets: Sequelize.INTEGER,
    income_in_retirement: Sequelize.INTEGER,
    retirement_age: Sequelize.INTEGER,
    target_city: Sequelize.STRING
}, {
    // disable the modification of tablenames;
    freezeTableName: true
    });

// Syncs with DB
Scenarios.sync();

// Makes the User_data Model available for other files (will also create a table)
module.exports = Scenarios;