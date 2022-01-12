const winston = require("winston");

module.exports = (app) => {
    const port = app.context.configs.get('app.port');

    return app.listen(port, function () {
        winston.info(`Server is listening on the port: ${port}`);
    });
};
