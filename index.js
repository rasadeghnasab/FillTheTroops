const Koa = require('koa');
const app = new Koa();


const server = require("./bootstrap")(app);

module.exports = server;
