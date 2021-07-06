const findUser = (username) => (username === 'test' ? { password: '123456' } : null);

const verifyUser = (password, storedPassword) => password === storedPassword;

module.exports = {
  findUser,
  verifyUser,
};
