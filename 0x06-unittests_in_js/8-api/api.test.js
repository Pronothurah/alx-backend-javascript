const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');

chai.use(chaiHttp);
const expect = chai.expect;

describe('API', () => {
  describe('GET /', () => {
    it('should return a 200 status code', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('should return "Welcome to the payment system"', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(res.text).to.equal('Welcome to the payment system');
          done();
        });
    });
  });
});
