const Router = require('@koa/router');
const appRoutes = new Router();
const koaJson = require('koa-json')
const cors = require('@koa/cors');

const apiRoutes = require('./api');
const errorHandlerMiddleware = require("../app/http/middlewares/errorHandlingMiddleware");
const routeNotFoundMiddleware = require("../app/http/middlewares/routeNotFoundMiddleware");

appRoutes.use('/api/', apiRoutes.routes(), apiRoutes.allowedMethods());

module.exports = (app) => {
    app.use(errorHandlerMiddleware);
    app.use(koaJson());
    app.use(cors());
    app.use(appRoutes.routes(), appRoutes.allowedMethods());
    app.use(routeNotFoundMiddleware);
};
