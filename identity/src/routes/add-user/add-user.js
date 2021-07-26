const bcrypt = require('bcrypt');

const addUserHandler = async (req, res) => {
  const {
    body: {
      username,
      password,
    },
  } = req;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
      username,
      password: hashedPassword,
    };

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { addUserHandler };
