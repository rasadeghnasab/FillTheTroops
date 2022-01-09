const solution01 = require('../../../app/modules/solution-01');
const solution02 = require('../../../app/modules/solution-02');
const inputValidationException = require("../../../app/http/exceptions/inputValidationException");

describe("input validation", () => {
    it("input should be an integer", async () => {
        expect(() => solution01('not an integer')).toThrow(inputValidationException);
        expect(() => solution01('not an integer')).toThrow('armyCount should be an integer');

        expect(() => solution02('not an integer')).toThrow(inputValidationException);
        expect(() => solution02('not an integer')).toThrow('armyCount should be an integer');
    });
    it("input should be greater than zero", async () => {
        const testSamples = [-10, -1, 0];

        for (const armyCountInput of testSamples) {
            expect(() => solution01(armyCountInput)).toThrow(inputValidationException);
            expect(() => solution01(armyCountInput)).toThrow('armyCount should be greater than zero');

            expect(() => solution02(armyCountInput)).toThrow(inputValidationException);
            expect(() => solution02(armyCountInput)).toThrow('armyCount should be greater than zero');
        }
    });
    it("input should not be less than troops types count", async () => {
        const testSamples = [1, 2];

        for (const armyCountInput of testSamples) {
            expect(() => solution01(armyCountInput)).toThrow(inputValidationException);
            expect(() => solution01(armyCountInput)).toThrow('Army members can not be less than troops types');

            expect(() => solution02(armyCountInput)).toThrow(inputValidationException);
            expect(() => solution02(armyCountInput)).toThrow('Army members can not be less than troops types');
        }
    });
});
