const inputValidationException = require("../exceptions/inputValidationException");
const {httpInputValidationError} = require('../exceptions/httpExceptions');

exports.suggest_troops = async function (request, response) {
    const soldiersCount = request.query.soldiersCount;
    const chosenSolution = parseInt(request.query.solution);

    const solution = chosenSolution === 2 ? require('../../modules/solution-02') : require('../../modules/solution-01');

    try {
        return response.status(200).send(solution(soldiersCount));
    } catch (error) {
        if(error instanceof inputValidationException) {
            throw new httpInputValidationError(error.message);
        }

        throw error;
    }
};
