const express = require('express');
const http = require('http');
const { getLoginOptions } = require('./login');

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

  const data = new TextEncoder().encode(
    JSON.stringify({
      username,
      password,
    }),
  );

  const identity = http.request(getLoginOptions('/api/login', data), (response) => {
    response.on('data', (d) => {
      res.send(d);
    });
  });

  identity.on('error', (error) => {
    console.error(error);
  });

  identity.write(data);
  identity.end();
});

module.exports = { router };
