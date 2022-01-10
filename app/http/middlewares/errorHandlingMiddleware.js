const winston = require("winston");

module.exports = async (ctx, next) => {
    try {
        await next();
    } catch (error) {
        winston.error("=>", error);

        const status = error.statusCode || error.status || 500;

        ctx.status = status;
        ctx.body = {
            message: error.message,
            statusCode: status
        };
    }
};
