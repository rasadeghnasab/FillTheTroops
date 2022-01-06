const express = require("express");

const troopsRoutes = require("./troops");
const errorHandlerMiddleware = require("../app/http/middlewares/errorHandlingMiddleware");

module.exports = (app) => {
    app.use(express.json());
    app.use("/api/troops/", troopsRoutes);
    app.use(errorHandlerMiddleware);
};
