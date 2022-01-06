const winston = require("winston");

module.exports = (error, request, response, next) => {
    winston.error("=>", error);

    return response.status(500).send("Something failed in the application.");
};
