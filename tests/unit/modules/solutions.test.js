const solution01 = require('../../../app/modules/solution-01');
const solution02 = require('../../../app/modules/solution-02');
const inputValidationException = require("../../../app/http/exceptions/inputValidationException");

let configs = require('../../../config');

let troopsTypes = configs.get('troops.types');

describe("input validation", () => {
    it("input should be an integer", async () => {
        expect(() => solution01('not an integer', troopsTypes)).toThrow(inputValidationException);
        expect(() => solution01('not an integer', troopsTypes)).toThrow('soldiersCount should be an integer');

        expect(() => solution02('not an integer', troopsTypes)).toThrow(inputValidationException);
        expect(() => solution02('not an integer', troopsTypes)).toThrow('soldiersCount should be an integer');
    });
    it("input should be greater than zero", async () => {
        const testSamples = [-10, -1, 0];

        for (const soldiersCountInput of testSamples) {
            expect(() => solution01(soldiersCountInput, troopsTypes)).toThrow(inputValidationException);
            expect(() => solution01(soldiersCountInput, troopsTypes)).toThrow('soldiersCount should be greater than zero');

            expect(() => solution02(soldiersCountInput, troopsTypes)).toThrow(inputValidationException);
            expect(() => solution02(soldiersCountInput, troopsTypes)).toThrow('soldiersCount should be greater than zero');
        }
    });
    it("input should not be less than troops types count", async () => {
        const testSamples = [1, 2];

        for (const soldiersCountInput of testSamples) {
            expect(() => solution01(soldiersCountInput, troopsTypes)).toThrow(inputValidationException);
            expect(() => solution01(soldiersCountInput, troopsTypes)).toThrow('Army members can not be less than troops types');

            expect(() => solution02(soldiersCountInput, troopsTypes)).toThrow(inputValidationException);
            expect(() => solution02(soldiersCountInput, troopsTypes)).toThrow('Army members can not be less than troops types');
        }
    });
});
