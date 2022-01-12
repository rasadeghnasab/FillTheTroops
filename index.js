const Koa = require('koa');
const app = new Koa();

const configs = require('./config');

app.context.configs = configs;

const server = require("./bootstrap")(app);

module.exports = server;
