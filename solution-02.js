function generateArmy(troopsTypes, armyCount) {
    if (armyCount < troopsTypes.length) {
        throw new Error('Army members can not be less than troops count');
    }

    // Create an array of size troops types length where
    // every troop has at least one member
    let army = (new Array(troopsTypes.length)).fill(1);

    for (let i = 0; i < armyCount - troopsTypes.length; i++) {
        const randomIndex = Math.floor((Math.random() * armyCount)) % troopsTypes.length;

        // Increment any random troop by 1
        army[randomIndex]++;
    }

    // const sum = army.reduce((result, a) => result + a, 0);
    // console.log({ sum })

    return createObjectFromTwoArrays(shuffle(troopsTypes), army);
}

let num;
armyCount = 16700000;
armyCount = 169;
// num = 4;
// num = 3;
// num = 2;

troopsTypes = ['spearmen', 'swordsmen', 'archers'];

// console.log(troopsCount(num));
console.log(generateArmy(troopsTypes, armyCount))

/**
 * Utility functions
 */
function createObjectFromTwoArrays(keys, values) {
    return Object.assign.apply({}, keys.map((value, index) => ({ [value]: values[index] })));
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