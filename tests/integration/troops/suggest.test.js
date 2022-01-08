const request = require("supertest");
const _ = require('lodash');

let server;

describe("/api/troops/suggest", () => {
    beforeEach(async () => {
        server = require("../../../index");
    });
    afterEach(() => {
        server.close();
    });

    describe("the route exists", () => {
        it("should not return 404 (exists)", async () => {
            const response = await request(server).get("/api/troops/suggest");
            expect(response.status).not.toBe(404);
            expect(response.type).toEqual('application/json')
        });
    });
    describe("input and output are equal", () => {
        it("the army members count should be equal to the entered input number", async () => {
            const armyCounts = [3, 50, 100, 167, 200, 1000, 1000000];

            for (const expectedArmyCount of armyCounts) {
                const response = await request(server).get("/api/troops/suggest").query({armyCount: expectedArmyCount});
                const actualArmyCount = Object.values(response.body).reduce((a, b) => a + b, 0)

                expect(expectedArmyCount).toEqual(actualArmyCount);
            }
        });
    });
    describe("unique result", () => {
        const rounds = 200;
        const input = 5000;
        it(`result should be unique each time for same input in ${rounds} rounds`, async () => {
            const results = [];
            for (let round = 0; round < rounds; round++) {
                const response = await request(server).get("/api/troops/suggest").query({armyCount: input});
                results.push(JSON.stringify(response.body));
            }

            // if there is no duplicate the result array should have 100 elements after executing the _.uniq function
            expect(_.uniq(results)).toHaveLength(rounds);
        });
        it("input should not be less than troops types count", async () => {
            const response = await request(server).get("/api/troops/suggest").query({armyCount: input});

            expect(Object.keys(response.body).length).toEqual(3);
        });
    });
    describe("input validation", () => {
        const armyCountInput = 200;
        it("input should be an integer", async () => {
            const response = await request(server).get("/api/troops/suggest").query({armyCount: 'not an integer'});
            expect(response.status).toBe(421);
            expect(response.body.message).toBe('armyCount should be an integer');
        });
        it("input should be greater than zero", async () => {
            const testSamples = [-10, -1, 0];

            for (const armyCountInput of testSamples) {
                let response = await request(server).get("/api/troops/suggest").query({armyCount: armyCountInput});
                expect(response.status).toBe(421);
                expect(response.body.message).toBe('armyCount should be greater than zero');
            }
        });
        it("input should not be less than troops types count", async () => {
            const testSamples = [1, 2];

            for (const armyCountInput of testSamples) {
                const response = await request(server).get("/api/troops/suggest").query({armyCount: armyCountInput});
                expect(response.status).toEqual(421);
                expect(response.body.message).toEqual('Army should not be less than troops count')
            }
        });
    });
});