const express = require('express');
const {
  findUser,
  verifyUser,
} = require('./utils/user.util');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Identity service');
});

router.post('/api/login', (req, res) => {
  const {
    body: {
      username,
      password,
    },
  } = req;

  const user = findUser(username);
  if (!user) {
    res.status(401).json({ message: `User: ${username} can not be found.` });
  } else {
    const isAuthenticated = verifyUser(password, user.password);

    if (isAuthenticated) {
      res.send('verified');
    } else {
      res.status(403).json({ message: 'Invalid credentials' });
    }
  }
});

module.exports = { router };
