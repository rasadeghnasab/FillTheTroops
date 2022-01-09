const {httpErrors} = require("./baseExceptions");

class customHttpError extends httpErrors {
    constructor(message, options = {}) {
        super(message, options);
    }
}

class httpInputValidationError extends httpErrors {
    constructor(message, options = {}) {
        super(message, Object.assign({statusCode: 422}, options));
    }
}

class httpBadRequestError extends httpErrors {
    constructor(message, options = {}) {
        super(message, Object.assign({statusCode: 400}, options));
    }
}

class httpNotFoundError extends httpErrors {
    constructor(message, options = {}) {
        super(message, Object.assign({statusCode: 404}, options));
    }
}

module.exports = {
    customHttpError,
    httpInputValidationError,
    httpBadRequestError,
    httpNotFoundError
}
