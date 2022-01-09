const {httpNotFoundError} = require("../exceptions/httpExceptions");

module.exports = (request, response, next) => {
    return next(new httpNotFoundError('Route does not exist'));
};
