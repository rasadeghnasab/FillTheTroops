const express = require("express");

const api = require('./api');
const errorHandlerMiddleware = require("../app/http/middlewares/errorHandlingMiddleware");
const routeNotFoundMiddleware = require("../app/http/middlewares/routeNotFoundMiddleware");

module.exports = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use("/api/", api);
    app.use(routeNotFoundMiddleware);
    app.use(errorHandlerMiddleware);
};
