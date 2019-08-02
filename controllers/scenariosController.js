var db = require("../db/models");
// const { Scenario } = require('../db');

// Defining methods for the scenariosController
module.exports = {
  // Find all scenarios, sort them by date, send them back to the user
  findAll: function(req, res) {
    db.Scenario
      .find(req.query)
      .sort({ date: -1 })
      .then(dbScenario => res.json(dbScenario))
      .catch(err => res.status(422).json(err));
  },
  // findById: function(req, res) {
  //   db.Scenario
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  create: function(req, res) {
    db.Scenario
      .create(req.body)
      .then(dbScenario => res.json(dbScenario))
      .catch(err => res.status(422).json(err));
  },
  // update: function(req, res) {
  //   db.Scenario
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  remove: function(req, res) {
    db.Scenario
      .findById({ _id: req.params.id })
      .then(dbScenario => dbScenario.remove())
      .then(dbScenario => res.json(dbScenario))
      .catch(err => res.status(422).json(err));
  }
};
