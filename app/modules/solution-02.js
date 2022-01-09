const _ = require('lodash');
const inputValidationException = require("../http/exceptions/inputValidationException");

const troopsTypes = ['spearmen', 'swordsmen', 'archers'];

/**
 * Accepts armyCount and validate it against some conditions
 * @param armyCount
 */
function validateInput(armyCount) {
    if (armyCount != parseInt(armyCount)) {
        throw new inputValidationException('armyCount should be an integer');
    }

    if (armyCount < 1) {
        throw new inputValidationException('armyCount should be greater than zero');
    }

    if (armyCount < troopsTypes.length) {
        throw new inputValidationException('Army members can not be less than troops types');
    }
}

/**
 * This solution has less entropy
 * Time complexity: O(1) (That means if we grow input the execution time won't increase)
 *
 * @param armyCount
 * @returns {*}
 */
module.exports = (armyCount) => {
    validateInput(armyCount);

    // Create an array of size troops types length where
    // every troop has at least one member
    let army = _.fill(new Array(troopsTypes.length), 1);

    for (let i = 0; i < armyCount - troopsTypes.length; i++) {
        const randomIndex = Math.floor((Math.random() * armyCount)) % troopsTypes.length;

        // Increment any random troop by 1
        army[randomIndex]++;
    }

    return _.zipObject(_.shuffle(troopsTypes), army);
}
