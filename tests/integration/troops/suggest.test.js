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

    const solutions = [1, 2];
    for (const solution of solutions) {
        describe("the route exists", () => {
            it("should not return 404", async () => {
                const response = await request(server).get("/api/troops/suggest").query({soldiersCount: 10, solution});
                expect(response.status).not.toBe(404);
                expect(response.type).toEqual('application/json')
            });
        });
        describe("input and output are equal", () => {
            it("the army members count should be equal to the entered input number", async () => {
                const soldiersCounts = [3, 50, 100, 167, 200, 1000, 1000000];

                for (const expectedsoldiersCount of soldiersCounts) {
                    const response = await request(server).get("/api/troops/suggest").query({
                        soldiersCount: expectedsoldiersCount,
                        solution
                    });
                    const actualsoldiersCount = Object.values(response.body).reduce((a, b) => a + b, 0)

                    expect(expectedsoldiersCount).toEqual(actualsoldiersCount);
                }
            });
        });
        describe("unique result", () => {
            const rounds = 100;
            const expectedSoldiersCount = 5000000;
            it(`result should be unique each time for same input in ${rounds} rounds`, async () => {
                const results = [];
                for (let round = 0; round < rounds; round++) {
                    const response = await request(server).get("/api/troops/suggest").query({
                        soldiersCount: expectedSoldiersCount,
                        solution
                    });
                    results.push(JSON.stringify(response.body));
                }

                // if there is no duplicate the result array should have 100 elements after executing the _.uniq function
                expect(_.uniq(results)).toHaveLength(rounds);
            });
        });
        describe("input validation", () => {
            const soldiersCountInput = 200;
            it("input should be an integer", async () => {
                const response = await request(server).get("/api/troops/suggest").query({
                    soldiersCount: 'not an integer',
                    solution
                });
                expect(response.status).toBe(422);
                expect(response.body.message).toBe('soldiersCount should be an integer');
            });
            it("input should be greater than zero", async () => {
                const testSamples = [-10, -1, 0];

                for (const soldiersCountInput of testSamples) {
                    let response = await request(server).get("/api/troops/suggest").query({
                        soldiersCount: soldiersCountInput,
                        solution
                    });
                    expect(response.status).toBe(422);
                    expect(response.body.message).toBe('soldiersCount should be greater than zero');
                }
            });
            it("input should not be less than troops types count", async () => {
                const testSamples = [1, 2];

                for (const soldiersCountInput of testSamples) {
                    const response = await request(server).get("/api/troops/suggest").query({
                        soldiersCount: soldiersCountInput,
                        solution
                    });
                    expect(response.status).toEqual(422);
                    expect(response.body.message).toEqual('Army members can not be less than troops types')
                }
            });
        });

        describe('return exception message on unhandled exceptions', () => {
            it('thrown exception message and the response message are same', async () => {
                jest.mock(`../../../app/modules/solution-0${solution}`, () => {
                    return jest.fn(() => {
                        throw new Error('Another exception')
                    });
                });

                let response = await request(server).get("/api/troops/suggest").query({soldiersCount: 10, solution});
                expect(response.status).toBe(500);
                expect(response.body.message).toBe('Another exception');
            })
        })
    }
});
