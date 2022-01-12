const inputValidationException = require("../exceptions/inputValidationException");
const {httpInputValidationError} = require('../exceptions/httpExceptions');

exports.suggest_troops = async function (ctx) {
    const soldiersCount = ctx.request.query.soldiersCount;
    let chosenSolution = parseInt(ctx.request.query.solution);
    chosenSolution = chosenSolution === 2 ? chosenSolution : 1;

    const solution = require(`../../modules/solution-0${chosenSolution}`);

    try {
        ctx.status = 200;
        ctx.body = {
            data: solution(soldiersCount, ctx.configs.get('troops.types')),
            statusCode: 200
        };
    } catch (error) {
        if (error instanceof inputValidationException) {
            throw new httpInputValidationError(error.message);
        }

        throw error;
    }
};
