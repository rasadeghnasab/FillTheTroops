const Router = require('@koa/router');
const apiRoutes = new Router();

const troopsRoutes = require('./troops');

apiRoutes.use("troops/", troopsRoutes.routes(), troopsRoutes.allowedMethods());

module.exports = apiRoutes;
