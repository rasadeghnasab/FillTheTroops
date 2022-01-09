const {httpErrors} = require("./baseExceptions");

class inputValidationException extends httpErrors {
    constructor(message, options = {}) {
        super(message, options);
    }
}

module.exports = inputValidationException;
