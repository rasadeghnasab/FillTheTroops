const _ = require('lodash');
const inputValidationException = require('../http/exceptions/inputValidationException');

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
 * This solution has more entropy
 * Time complexity: O(n)
 *
 * @param armyCount
 * @returns Object
 */
module.exports = (armyCount) => {
    const troopsCount = troopsTypes.length;

    validateInput(armyCount);

    // fill all the troops with 1
    const army = Object.assign.apply({}, troopsTypes.map((troopType) => ({[troopType]: 1})))

    const shuffledTroopsTypes = _.shuffle(troopsTypes);
    const lastTroop = shuffledTroopsTypes.pop();
    let remains = armyCount - troopsCount;

    for (const troopType of shuffledTroopsTypes) {
        if (remains <= 0) {
            break;
        }

        const troopCount = _.random(1, remains);

        army[troopType] += troopCount;
        remains -= troopCount;
    }

    if (remains > 0) {
        // if anything remains put it in the lastTroop
        army[lastTroop] += remains;
    }

    return army;
}
