const winston = require("winston");

module.exports = (error, request, response, next) => {
    winston.error("=>", error);

    return response.status(error.statusCode ?? 500).send({message: error.message, statusCode: error.statusCode ?? 500});
};
