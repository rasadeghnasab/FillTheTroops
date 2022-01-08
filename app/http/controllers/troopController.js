// const solution = config.useFakeSomething ?
//     require('./FakeSomething').FakeSomething :
//     require('./RealSomething').RealSomething;

const utilities = require('../../modules/utilities');
const solution01 = require('../../modules/solution-01');

exports.suggest_troops = async function(request, response) {
    const armyCount = request.query.armyCount;

    if(armyCount != parseInt(armyCount)) {
        return response.status(421).send({
            message: 'armyCount should be an integer'
        });
    }

    if(armyCount < 1) {
        return response.status(421).send({message: 'armyCount should be greater than zero'})
    }

    if(armyCount < 3) {
        return response.status(421).send({message: 'Army should not be less than troops count'})
    }

    response.status(200).send(solution01(armyCount));
};
