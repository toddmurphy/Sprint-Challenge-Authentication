const request = require('supertest');
const db = require('../database/dbConfig');
const bcrypt = require('bcryptjs');
const server = require('../api/server');

describe('server', function() {
  it('runs the tests', function() {
    expect(true).toBe(true);
  });
});

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
