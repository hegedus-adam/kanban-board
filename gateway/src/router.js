const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('API Gateway service');
});

router.post('/api/login', (req, res) => {
  const {
    body: {
      username,
      password,
    },
  } = req;
  res.send(`${username}: ${password}`);
});

module.exports = { router };
