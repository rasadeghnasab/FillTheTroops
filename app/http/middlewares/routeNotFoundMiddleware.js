const {httpNotFoundError} = require("../exceptions/httpExceptions");

module.exports = async (ctx) => {
    ctx.throw(new httpNotFoundError('Route does not exist'));
};
