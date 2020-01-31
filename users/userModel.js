const db = require('../database/dbConfig');

module.exports = {
  //export helper functions to authRouter
  findBy,
  getUserById,
  addUser
};

//findBy --> login - finding user by 'username'
function findBy(user) {
  return db('users')
    .where('username', user)
    .first();
}

//getUserById --> get a single user by their 'id'
function getUserById(id) {
  return db('users')
    .where('id', id)
    .first();
}

//addUser --> create a new user
function addUser(user) {
  return db('users')
    .insert(user, 'id')
    .then(id => {
      console.log(id);
      return getUserById(id).where('id', id);
    });
}
// if the .then in addUser doesnt return the user swap this as it works
// .then(ids => {
//     console.log(ids);
//     return getUserbyID(ids[0]);
//   });
