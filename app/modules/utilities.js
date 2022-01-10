/**
 * Receives two integers and returns a random value between those two
 *
 * Note: min and max are included
 *
 * @param {int} min
 * @param {int} max
 * @returns {integer}
 */
exports.random = function(min, max) {
    if(min > max) {
        const temp = min;
        min = max;
        max = temp;
    }

    return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * Shuffles a given array
 *
 * @param {array} array
 * @returns
 */
exports.shuffle = function(array) {
    return array
        .map(element => [Math.random(), element])
        .sort((a, b) => a[0] - b[0])
        .map(element => element[1]);
}

/**
 * Receives two arrays and create an object uses the first array as key and the second one for values
 *
 * @param keys
 * @param values
 * @returns {Object}
 */
exports.createObjectFromTwoArrays = function(keys, values) {
    return Object.assign.apply({}, keys.map((value, index) => ({ [value]: values[index] })));
}
