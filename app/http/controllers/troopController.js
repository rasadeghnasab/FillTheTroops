exports.suggest_troops = async function(request, response) {
    const armyCount = request.query.armyCount;
    const chosenSolution = parseInt(request.query.solution);

    const solution = chosenSolution === 1 ? require('../../modules/solution-01') : require('../../modules/solution-02');

    if(armyCount != parseInt(armyCount)) {
        return response.status(422).send({
            message: 'armyCount should be an integer'
        });
    }

    if(armyCount < 1) {
        return response.status(422).send({message: 'armyCount should be greater than zero'})
    }

    if(armyCount < 3) {
        return response.status(422).send({message: 'Army should not be less than troops count'})
    }

    response.status(200).send(solution(armyCount));
};
