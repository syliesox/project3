const router = require("express").Router();
const scenariosController = require("../../controllers/scenariosController.js");

// Matches with "/api/scenarios"
router.route("/")
  .get(scenariosController.findAll)
  .post(scenariosController.create);

// Matches with "/api/scenarios/:id"
router
  .route("/:id")
  // .get(scenariosController.findById)
  // .put(scenariosController.update)
  .delete(scenariosController.remove);

module.exports = router;