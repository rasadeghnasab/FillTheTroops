// const solution = config.useFakeSomething ?
//     require('./FakeSomething').FakeSomething :
//     require('./RealSomething').RealSomething;

const utilities = require('../../modules/utilities');
const solution01 = require('../../modules/solution-01');

exports.suggest_troops = async function(request, response) {
    response.status(200).send(solution01(request.query.armyCount));
};
