const chai = require('chai');
const http = require('chai-http');
const expect = chai.expect;
chai.use(http);

const app = require('../src/app');

describe('App', () => {
    it('should exists ', () => {
        expect(app).to.be.a('function');
    });

    it('GET / should return 200 and message', done => {
        chai.request(app).get('/')
            .then((res) => {
                expect(res).to.have.status(200);
                expect(res.body.message).to.contain('Hello from TDD node!');
                done();
            }).catch(error => console.log(`error: ${error.message}`));
    })
});