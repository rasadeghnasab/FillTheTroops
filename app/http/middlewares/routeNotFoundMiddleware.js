const {notFoundError} = require("../exceptions/httpExceptions");

module.exports = (request, response, next) => {
    return next(new notFoundError('Route does not found'));
};
