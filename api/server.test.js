const request = require('supertest');

const server = require('./server');

describe('server', function() {
  it('runs the tests', function() {
    expect(true).toBe(true);
  });
});

//returns the status code 200
describe('GET /', function() {
  it('should return 200', function() {
    return request(server)
      .get('/')
      .then(res => {
        //check that the status code is 200
        expect(res.status).toBe(200);
      });
  }); // end of first 'it' block.
}); //end of test
