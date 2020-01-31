const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/userModel');

router.post('/register', (req, res) => {
  // implement registration
  const { username, password } = req.body;
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
