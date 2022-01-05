function generateArmy(troopsTypes, armyCount) {
    const troopsCount = troopsTypes.length;

    if (armyCount < troopsCount) {
        throw new Error('Army members can not be less than troops types.');
    }

    // fill all the trops with 1
    const army = Object.assign.apply({}, troopsTypes.map((troopType) => ({ [troopType]: 1 })))

    if (armyCount === troopsCount) {
        return army;
    }

    const shuffledTroopsTypes = shuffle(troopsTypes);
    const lastTroop = shuffledTroopsTypes.pop();

    let remains = armyCount - troopsCount;
    for (const troopType of shuffledTroopsTypes) {
        if (remains <= 0) {
            break;
        }

        troopCount = randomIntInRange(1, remains);

        army[troopType] += troopCount;
        remains -= troopCount;
    }

    if (remains > 0) {
        // if anything remains put it in the lastTroop
        army[lastTroop] += remains;
    }

    return army;
}

let armyCount;
armyCount = 1670000;
armyCount = 167;
// armyCount = 6;
// armyCount = 3;
// armyCount = 2;

const troopsTypes = ['spearmen', 'swordsmen', 'archers'];
const army = generateArmy(troopsTypes, armyCount);

// make sure provided input and final army count are equal
const ArmyResultCount = Object.keys(army).reduce(function (total, key) {
    return total + army[key];
}, 0);

/**
 * 
 * @param {int} min 
 * @param {int} max 
 * @returns 
 */
function randomIntInRange(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * 
 * @param {array} array 
 * @returns 
 */
function shuffle(array) {
    return array
        .map(element => [Math.random(), element])
        .sort((a, b) => a[0] - b[0])
        .map(element => element[1]);
}

