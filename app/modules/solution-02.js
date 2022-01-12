const utilities = require('./utilities');
const inputValidationException = require("../http/exceptions/inputValidationException");

/**
 * Accepts soldiersCount and validate it against some conditions
 * @param soldiersCount
 * @param troopsTypes
 */
function validateInput(soldiersCount, troopsTypes) {
    if (soldiersCount != parseInt(soldiersCount)) {
        throw new inputValidationException('soldiersCount should be an integer');
    }

    if (soldiersCount < 1) {
        throw new inputValidationException('soldiersCount should be greater than zero');
    }

    if (soldiersCount < troopsTypes.length) {
        throw new inputValidationException('Army members can not be less than troops types');
    }
}

/**
 * This solution has less entropy
 * Time complexity: O(1) (That means if we grow input the execution time won't increase)
 *
 * @param soldiersCount
 * @param troopsTypes
 * @returns {*}
 */
module.exports = (soldiersCount, troopsTypes) => {
    validateInput(soldiersCount, troopsTypes);

    // Create an array of size troops types length where
    // every troop has at least one member
    let army = (new Array(troopsTypes.length)).fill(1);

    for (let i = 0; i < soldiersCount - troopsTypes.length; i++) {
        const randomIndex = Math.floor((Math.random() * soldiersCount)) % troopsTypes.length;

        // Increment any random troop by 1
        army[randomIndex]++;
    }

    return utilities.createObjectFromTwoArrays(utilities.shuffle(troopsTypes), army);
}
