const express = require("express");
const router = express.Router();
const troopController = require('../app/http/controllers/troopController')

router.get("/suggest", troopController.suggest_troops);

module.exports = router;
