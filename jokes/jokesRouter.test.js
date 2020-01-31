const request = require('supertest');

const server = require('../api/server');

//return status code of 200
describe('GET /', function() {
  it('should return 200', function() {
    return request(server)
      .get('/')
      .then(res => {
        //check that the status code is 200
        expect(res.status).toBe(200);
      });
  });
});
