const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/userModel');

router.post('/register', (req, res) => {
  const newUser = req.body;

  //create hash for password using bcrypt
  const hash = bcrypt.hashSync(newUser.password, 10);
  newUser.password = hash; //hashed password with user details reassigned to newUser

  //add the newUser
  Users.addUser(newUser)
    .then(user => {
      console.log('inside addUser', user);
      res.status(200).json(user);
    })
    .catch(error => {
      console.log('inside newUser error', error);
      res.status(500).json({ message: 'Sorry, no new user registered on the server', error });
    });
});

router.post('/login', (req, res) => {
  // implement login
  const { username, password } = req.body;

  Users.findBy(username)
    .then(user => {
      console.log('inside findBy user', user);
      if (user && bcrypt.compareSync(password, user.password)) {
        //create the token
        const token = signToken(user); //invokes signToken function and passes in 'user'
        res.status(200).json({ message: `Welcome ${user.username}. You're secret token in ${token}. Please keep it secret and do not share with anyone.` });
      } else {
        res.status(401).json({ message: 'Sorry, invalid credentials' });
      }
    })
    .catch(error => {
      console.log('inside findBy error', error);
      res.status(500).json({ message: 'Sorry, login not working on the server', error });
    });
});

//create token signature
function signToken(user) {
  const payload = {
    //add any data we want to store in token payload
    user
  };

  const options = {
    //how long the token will expire
    expiresIn: '1d'
  };

  //return and extract the secret away so it can be required and used where needed
  return jwt.sign(payload, process.env.JWT_SECRET, options);
}

module.exports = router;
