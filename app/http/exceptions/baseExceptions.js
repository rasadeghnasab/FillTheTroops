'use strict';

class applicationError extends Error {
    constructor(message, options) {
        message = message === '' ? 'Unexpected error happened' : message;
        super(message);

        Object.assign({statusCode: 400}, options);
        if (Object.keys(options).length) {
            this.assignOptions(options);
        }
    }

    name() {
        return this.constructor.name;
    }

    assignOptions(options) {
        for (const [key, value] of Object.entries(options)) {
            this[key] = value;
        }
    }
}

class httpExceptions extends applicationError {
}

module.exports = {
    applicationError,
    httpExceptions
}