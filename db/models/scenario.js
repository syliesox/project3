const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// If disconnected, then connect using connection-config.js.
if (mongoose.connection.readyState === 0)
    mongoose.connect(require('../connection-config.js'))
        .catch(err => {
            console.error('mongoose Error', err)
        });

// Create a new ScenarioSchema object using the Schema constructor.
const scenarioSchema = new Schema({
    user_name: { type: String, trim: true, required: true },
    total_assets: { type: Number, required: true },
    income_in_retirement: { type: Number, required: true },
    retirement_age: { type: Number, required: true },
    target_city: { type: String, trim: true, required: true },
    city_cpir:{ type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
});

// ScenarioSchema.pre('save', function (next) {
//     this.updatedAt = Date.now();
//     next();
// });

// ScenarioSchema.pre('update', function () {
//     this.constructor.update({ _id: this._id }, { $set: { updatedAt: Date.now() } });
// });

// ScenarioSchema.pre('findOneAndUpdate', function () {
//     this.constructor.update({ _id: this._id }, { $set: { updatedAt: Date.now() } });
// });

/** @name db.Scenario */
// Create our model from the above schema using Mongoose's model method.  Export the Scenario model.
module.exports = mongoose.model("Scenario", scenarioSchema);
