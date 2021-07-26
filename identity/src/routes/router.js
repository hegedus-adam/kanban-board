const express = require('express');
const { addUserHandler } = require('./add-user');
const { loginHandler } = require('./login');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Identity service');
});

router.post('/api/login', loginHandler);
router.post('/api/add-user', addUserHandler);

module.exports = { router };
