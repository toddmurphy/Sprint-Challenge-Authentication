const request = require('supertest');
// const db = require('../database/dbConfig');
// const bcrypt = require('bcryptjs');
const server = require('../api/server');

// describe('POST /api/login', () => {
//   it('should return status of 200', async () => {
//     await db('users').insert({
//       username: 'kevin',
//       password: bcrypt.hashSync('garnett', 10)
//     });
//     const res = await request(server)
//       .post('/login')
//       .send({
//         username: 'kevin',
//         password: 'garnett'
//       })
//       .set('Content-Type', 'application/json');
//     expect(res.status).toBe(200);
//   });
// });

describe('it should return json', function() {
  it('should return json', function() {
    return request(server)
      .post('/register')
      .then(res => {
        expect(res.body.api).toBe('up');
      });
  });
});
