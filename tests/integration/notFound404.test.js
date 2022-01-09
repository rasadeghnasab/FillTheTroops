const request = require("supertest");

let server;
describe("/api/troops/suggest", () => {
    beforeEach(async () => {
        server = require("../../index");
    });
    afterEach(() => {
        server.close();
    });

    describe("return 404 on unknown routes", () => {
        it("not existed route will return 404", async () => {
            const response = await request(server).get("/a-random-route-which-does-not-exist");

            expect(response.statusCode).toEqual(404);
            expect(response.body.message).toEqual('Route does not exist');
        });
    });
});
