'use strict';

class applicationError extends Error {
    constructor(message, options) {
        super(message);

        this.name = this.constructor.name;
        Object.assign({statusCode: 400}, options);
        if (Object.keys(options).length) {
            this.assignOptions(options);
        }
    }

    assignOptions(options) {
        for (const [key, value] of Object.entries(options)) {
            this[key] = value;
        }
    }
}

class httpErrors extends applicationError {
}

module.exports = {
    applicationError,
    httpErrors
}
