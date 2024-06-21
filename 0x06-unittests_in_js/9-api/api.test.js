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

  describe('GET /cart/:id', () => {
    it('should return a 200 status code when :id is a number', (done) => {
      chai.request(app)
        .get('/cart/123')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });

    it('should return "Payment methods for cart :id" when :id is a number', (done) => {
      chai.request(app)
        .get('/cart/123')
        .end((err, res) => {
          expect(res.text).to.equal('Payment methods for cart 123');
          done();
        });
    });

    it('should return a 404 status code when :id is not a number', (done) => {
      chai.request(app)
        .get('/cart/abc')
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });

    it('should return "Invalid cart ID" when :id is not a number', (done) => {
      chai.request(app)
        .get('/cart/abc')
        .end((err, res) => {
          expect(res.text).to.equal('Invalid cart ID');
          done();
        });
    });
  });
});
