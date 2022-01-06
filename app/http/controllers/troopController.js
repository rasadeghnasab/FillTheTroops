const solution = config.useFakeSomething ?
    require('./FakeSomething').FakeSomething :
    require('./RealSomething').RealSomething;

exports.suggest_troops = async function(request, response) {
    response.status(200).send('NOT IMPLEMENTED: Troops suggestion');
};
