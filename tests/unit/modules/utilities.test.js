const utilities = require('../../../app/modules/utilities');

describe("test the random function", () => {
    it("the result is always is in the provided range", async () => {
        const ranges = [[-100, 100], [0, 0], [1, 10]];
        for (const range of ranges) {
            const [min, max] = range;
            const result = utilities.random(min, max);

            expect(result).toBeGreaterThanOrEqual(min);
            expect(result).toBeLessThanOrEqual(max);
        }
    });
    it("should switches the range automatically if wrong range provided", async () => {
        const [min, max] = [100, -100];
        const result = utilities.random(min, max);

        expect(result).toBeGreaterThanOrEqual(max);
        expect(result).toBeLessThanOrEqual(min);
    });
});

describe("test the shuffle function", () => {
    it("no two arrays should be equal", async () => {
        for (let i = 0; i < 10; i++) {
            let arrayWithRandomValues = (new Array(i + 20)).fill(1).map(() => Math.random());

            expect(arrayWithRandomValues.toString()).not.toEqual(utilities.shuffle(arrayWithRandomValues).toString());
        }
    });
});

describe("test the createObjectFromTwoArrays function", () => {
    it("should create the object as we wanted", async () => {
        const expectedObject = {a: 1, b: 2, c: 3, d: 4}

        expect(expectedObject).toEqual(utilities.createObjectFromTwoArrays(['a', 'b', 'c', 'd'], [1, 2, 3, 4]));
    });

    it("should override the value on repetitive key", async () => {
        const expectedObject = {a: 4, b: 2, c: 3}

        expect(expectedObject).toEqual(utilities.createObjectFromTwoArrays(['a', 'b', 'c', 'a'], [1, 2, 3, 4]));
    });
});
