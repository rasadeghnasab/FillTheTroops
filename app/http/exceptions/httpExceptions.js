const {httpExceptions} = require("./baseExceptions");

class customHttpException extends httpExceptions {
    constructor(message, options = {}) {
        super(message, options);
    }
}

class badRequestError extends httpExceptions {
    constructor(message, options = {}) {
        super(message, Object.assign({statusCode: 400}, options));
    }
}

class notFoundError extends httpExceptions {
    constructor(message, options = {}) {
        super(message, Object.assign({statusCode: 404}, options));
    }
}

module.exports = {
    customHttpException,
    badRequestError,
    notFoundError
}