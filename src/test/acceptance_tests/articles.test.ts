import * as request from "supertest";
import { app } from '../../server';

describe("GET /articles", () => {
    it("SHOULD return 200 Ok", done => {
        request(app)
            .get("/articles")
            .end((error, response) => {
                expect(response.status).toBe(200);
                done();
            });
    });

    it("Should return list of 2 articles WHEN db containes 2 articles", async done => {
        const articles = [new Article("Java with JVM", 3), new Article("Effective Java")];
        // write test first, assumpt that we have db object to insert Articles into db
        // Article class and db object will be error because at first we dont have them
        //
        await db.createArticle(articles[0]);
        await db.createArticle(articles[1]);

        request(app).get("/articles").end((error, response) => {
            expect(response.body).toEqual(articles);
            done();
        })
    })
});