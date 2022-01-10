const winston = require("winston");
const _ = require("lodash");

module.exports = (() => {
  winston.exceptions.handle(
    new winston.transports.File({
      filename: "logs/uncaughtExceptions.log",
    }),
    new winston.transports.Console()
  );

  process.on("unhandledRejection", (error, promise) => {
    throw error;
  });

  winston.add(new winston.transports.File({ filename: "logs/errors.log" }));

  if (!["test", "production"].includes(process.env.NODE_ENV)) {
    winston.add(
      new winston.transports.Console({
        format: winston.format.colorize(),
      })
    );
  }
})();
