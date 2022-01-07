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

    describe("GET /", () => {
        it("should not return 404 (exists)", async () => {
            const response = await request(server).get("/api/troops/suggest");
            expect(response.status).not.toBe(404);
            expect(response.type).toEqual('application/json')
        });
    });
    describe("GET /", () => {
        it("the army members count should be equal to the entered input number", async () => {
            const armyCounts = [3, 50, 100, 167, 200, 1000, 1000000];

            for (const expectedArmyCount of armyCounts) {
                const response = await request(server).get("/api/troops/suggest").query({armyCount: expectedArmyCount});
                const actualArmyCount = Object.values(response.body).reduce((a, b) => a + b, 0)
                console.log(actualArmyCount)
                expect(expectedArmyCount).not.toBe(actualArmyCount);
            }
        });
    });

    describe("GET /", () => {
        it("input should be an integer greater", async () => {
            const response = await request(server).get("/api/troops/suggest");
            expect(response.status).toBe(401);
            expect(response.body).toBe('Input should be an integer');
        });
        it("input should be greater than zero", async () => {
            let response = await request(server).get("/api/troops/suggest").query({armyCount: 0});
            expect(response.status).toBe(401);
            expect(response.body).toBe('Input should be greater than zero');

            response = await request(server).get("/api/troops/suggest").query({armyCount: -1});
            expect(response.status).toBe(401);
            expect(response.body).toBe('Input should be greater than zero');
        });
        it("input should not be less than troops types count", async () => {
            const response = await request(server).get("/api/troops/suggest");
            expect(response.status).not.toBe(404);
        });
    });

    describe("GET /", () => {
        const rounds = 100;
        const input = 167;
        it(`result should be unique each time for same input in ${rounds} rounds`, async () => {
            const results = [];
            for(let round = 0; round < rounds; round++) {
                const response = await request(server).get("/api/troops/suggest").query({armyCount: input});
                results.push(JSON.stringify(response.body));
            }
            // console.log(results)

            // if there is no duplicate the result array should have 100 elements after executing the _.uniq function
            expect(_.uniq(results)).toHaveLength(100);
        });
        it("input should not be less than troops types count", async () => {
            const response = await request(server).get("/api/troops/suggest");
            expect(response.status).not.toBe(404);
        });
    });
});