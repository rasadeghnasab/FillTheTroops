const app = require("express")();

const server = require("./bootstrap")(app);

module.exports = server;
