const {httpErrors} = require("./baseExceptions");

class httpInputValidationError extends httpErrors {
    constructor(message, options = {}) {
        super(message, Object.assign({statusCode: 422}, options));
    }
}

class httpNotFoundError extends httpErrors {
    constructor(message, options = {}) {
        super(message, Object.assign({statusCode: 404}, options));
    }
}

module.exports = {
    httpInputValidationError,
    httpNotFoundError
}
