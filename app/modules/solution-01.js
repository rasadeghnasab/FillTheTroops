const utilities = require('./utilities');
const inputValidationException = require('../http/exceptions/inputValidationException');

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
 * This solution has more entropy
 * Time complexity: O(n)
 *
 * @param soldiersCount
 * @param troopsTypes
 * @returns Object
 */
module.exports = (soldiersCount, troopsTypes) => {
    const troopsCount = troopsTypes.length;

    validateInput(soldiersCount, troopsTypes);

    // fill all the troops with 1
    const army = Object.assign.apply({}, troopsTypes.map((troopType) => ({[troopType]: 1})))

    const shuffledTroopsTypes = utilities.shuffle(troopsTypes);
    const lastTroop = shuffledTroopsTypes.pop();
    let remains = soldiersCount - troopsCount;

    for (const troopType of shuffledTroopsTypes) {
        if (remains <= 0) {
            break;
        }

        const troopCount = utilities.random(1, remains);

        army[troopType] += troopCount;
        remains -= troopCount;
    }

    if (remains > 0) {
        // if anything remains put it in the lastTroop
        army[lastTroop] += remains;
    }

    return army;
}
