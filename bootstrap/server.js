const winston = require("winston");

module.exports = (app) => {
    const port = process.env.PORT || 8000;
    return app.listen(port, function () {
        winston.info(`Server is listening on the port: ${port}`);
    });
};
