const express = require("express");
const router = express.Router();
const exceptionCatcher = require('../exceptionCatcher');
const troopController = require('../../app/http/controllers/troopController')

router.get("/suggest", exceptionCatcher(troopController.suggest_troops));

module.exports = router;
