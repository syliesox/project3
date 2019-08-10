const mongoose = require("mongoose");
const db = require("../db/models");

// This file empties the Scenarios collection and inserts the below-listed scenarios.

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/retirementDB"
);

const scenarioSeed = [
  {
    user_name: "John Smith",
    total_assets: 80000,
    income_in_retirement: 12000,
    retirement_age: 65,
    target_city: "New Orleans, Louisiana",
    city_cpir: 63.194776006844265,
    createdAt: new Date(Date.now())
  },
  {
    user_name: "John Smith",
    total_assets: 200000,
    income_in_retirement: 50000,
    retirement_age: 79,
    target_city: "Phoenix, Arizona",
    city_cpir: 51.57627856974486,
    createdAt: new Date(Date.now())
  },
  {
    user_name: "John Smith",
    total_assets: 1000,
    income_in_retirement: 1000,
    retirement_age: 40,
    target_city: "Grenada, Spain",
    city_cpir: 37.49249300604065,
    createdAt: new Date(Date.now())
  },
  {
    user_name: "John Smith",
    total_assets: 71500,
    income_in_retirement: 25000,
    retirement_age: 50,
    target_city: "Naples, Italy",
    city_cpir: 40.65343800624011,
    createdAt: new Date(Date.now())
  },
  {
    user_name: "John Smith",
    total_assets: 71500,
    income_in_retirement: 25000,
    retirement_age: 50,
    target_city: "Goa, India",
    city_cpir: 16.734851081616867,
    createdAt: new Date(Date.now())
  },
  {
    user_name: "Jennifer Wyatt",
    total_assets: 83000,
    income_in_retirement: 13000,
    retirement_age: 68,
    target_city: "New Orleans, Louisiana",
    city_cpir: 63.194776006844265,
    createdAt: new Date(Date.now())
  },
  {
    user_name: "Jennifer Wyatt",
    total_assets: 80400,
    income_in_retirement: 12400,
    retirement_age: 61,
    target_city: "Phoenix, Arizona",
    city_cpir: 51.57627856974486,
    createdAt: new Date(Date.now())
  },
  {
    user_name: "Jennifer Wyatt",
    total_assets: 800000,
    income_in_retirement: 10000,
    retirement_age: 53,
    target_city: "Goa, India",
    city_cpir: 16.734851081616867,
    createdAt: new Date(Date.now())
  },
  {
    user_name: "Jennifer Wyatt",
    total_assets: 180000,
    income_in_retirement: 50000,
    retirement_age: 55,
    target_city: "Naples, Italy",
    city_cpir: 40.65343800624011,
    createdAt: new Date(Date.now())
  },
  {
    user_name: "Jennifer Wyatt",
    total_assets: 800,
    income_in_retirement: 60000,
    retirement_age: 64,
    target_city: "Grenada, Spain",
    city_cpir: 37.49249300604065,
    createdAt: new Date(Date.now())
  },
  {
    user_name: "Gordon Sumner",
    total_assets: 80000000,
    income_in_retirement: 50000,
    retirement_age: 30,
    target_city: "New Orleans, Louisiana",
    city_cpir: 63.194776006844265,
    createdAt: new Date(Date.now())
  },
  {
    user_name: "Reginald Dwight",
    total_assets: 90000000,
    income_in_retirement: 0,
    retirement_age: 22,
    target_city: "Grenada, Spain",
    city_cpir: 37.49249300604065,
    createdAt: new Date(Date.now())
  },
  {
    user_name: "Farrokh Bulsara",
    total_assets: 76554,
    income_in_retirement: 12099,
    retirement_age: 41,
    target_city: "Casablanca, Morocco",
    city_cpir: 25.37699284160013,
    createdAt: new Date(Date.now())
  },
];

db.Scenario
  .remove({})
  .then(() => db.Scenario.collection.insertMany(scenarioSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
