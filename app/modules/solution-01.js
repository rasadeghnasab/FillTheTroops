const _ = require('lodash');

const troopsTypes = ['spearmen', 'swordsmen', 'archers'];

/**
 * This solution has more entropy
 * Time complexity: O(n)
 *
 * @param armyCount
 * @returns Object
 */
module.exports = (armyCount) => {
    const troopsCount = troopsTypes.length;

    if (armyCount < troopsCount) {
        throw new Error('Army members can not be less than troops types.');
    }

    // fill all the troops with 1
    const army = Object.assign.apply({}, troopsTypes.map((troopType) => ({ [troopType]: 1 })))

    if (armyCount === troopsCount) {
        return army;
    }

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
