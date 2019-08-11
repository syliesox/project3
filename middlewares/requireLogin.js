const router = require("express").Router();
const scenarioRoutes = require("./scenarios");

// Scenario routes
router.use("/scenarios", scenarioRoutes);

module.exports = router;