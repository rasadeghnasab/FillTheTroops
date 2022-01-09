const inputValidationException = require("../exceptions/inputValidationException");
const {httpInputValidationError} = require('../exceptions/httpExceptions');

exports.suggest_troops = async function (request, response) {
    const armyCount = request.query.armyCount;
    const chosenSolution = parseInt(request.query.solution);

    const solution = chosenSolution === 2 ? require('../../modules/solution-02') : require('../../modules/solution-01');

    try {
        return response.status(200).send(solution(armyCount));
    } catch (error) {
        if(error instanceof inputValidationException) {
            throw new httpInputValidationError(error.message);
        }

        throw error;
    }
};
