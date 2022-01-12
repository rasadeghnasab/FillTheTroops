const inputValidationException = require("../exceptions/inputValidationException");
const {httpInputValidationError} = require('../exceptions/httpExceptions');

exports.suggest_troops = async function (ctx) {
    const soldiersCount = ctx.request.query.soldiersCount;
    let selectedSolution = parseInt(ctx.request.query.solution);
    selectedSolution = selectedSolution === 2 ? selectedSolution : ctx.configs.get('troops.defaultSolution');

    const solution = require(`../../modules/solution-0${selectedSolution}`);

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
