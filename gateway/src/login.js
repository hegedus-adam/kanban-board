const { hostname, port } = require('./identity.config');

const getLoginOptions = (url, data) => ({
  hostname,
  port,
  path: url,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
  },
});

module.exports = {
  getLoginOptions,
};
