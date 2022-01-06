const utilities = require('./utilities');

const troopsTypes = ['spearmen', 'swordsmen', 'archers'];

export default function generateArmy(armyCount) {
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

    return utilities.createObjectFromTwoArrays(utilities.shuffle(troopsTypes), army);
}

