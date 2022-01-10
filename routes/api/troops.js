const Router = require('@koa/router');
const troopsRoutes = new Router();

const troopController = require('../../app/http/controllers/troopController')

troopsRoutes.get("suggest", troopController.suggest_troops);

module.exports = troopsRoutes;
