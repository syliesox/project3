const router = require("express").Router();
const scenarioRoutes = require("./scenarios");

// Book routes
router.use("/scenarios", scenarioRoutes);

module.exports = router;