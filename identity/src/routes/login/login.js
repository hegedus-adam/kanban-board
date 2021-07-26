const {
  findUser,
  verifyUser,
} = require('./utils/user.util');

const loginHandler = (req, res) => {
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
};

module.exports = { loginHandler };
