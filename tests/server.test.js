const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../backend/server');

chai.use(chaiHttp);
const { expect } = chai;

describe('Backend Tests', () => {
  it('Should return Hello from the Backend!', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Hello from the Backend!');
        done();
      });
  });
});
