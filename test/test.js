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

describe('User registration', () => {
    it('POST / should return 201 and confirmation for valid input', done => {
        const new_user = {
            'name': 'John Wick',
            'email': 'john@wick.com',
            'password': 'secret'
        }
        chai.request(app).post('/register').send(new_user).then(res => {
            expect(res).to.have.status(201);
            expect(res.body.message).to.be.equal('User created!');
            expect(res.body.errors.length).to.be.equal(0);
            done();
        }).catch(error => console.log(error.message));
        
    });
});