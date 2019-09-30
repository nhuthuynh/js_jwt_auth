const chai = require('chai');
const expect = chai.expect;

const app = require('../src/app');

describe('App', () => {
    it('should exists ', () => {
        expect(app).to.be.a('function');
    });
});