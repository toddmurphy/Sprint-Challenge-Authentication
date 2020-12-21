const Users = require('../users/userModel');
const request = require('supertest');
const db = require('../database/dbConfig');
const bcrypt = require('bcryptjs');
const server = require('../api/server');

describe('users model', function() {
  describe('test environment', function() {
    it('should use the testing environment', function() {
      expect(process.env.DB_ENV).toBe('testing');
    });

    //insert a new user test
    // describe('insert', function() {
    //   beforeEach(async () => {
    //     await db('auth').truncate();
    //   });
    //   it('adds the new user to the database', async function() {
    //     //call insert, passing in a new user
    //     await Users.insert({ username: 'todd', password: 'murphy' });

    //     //open the database and see if the user is there
    //     const users = await db('auth');
    //     expect(users).toHaveLength(1); // '1' indicates that one 'username' was added to the database
    //   });
    // });
  });
});
