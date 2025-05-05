const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { name, email, phone } = req.body;
  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '2h' });
  res.status(201).json({ message: 'Registered', token });
};

exports.login = async (req, res) => {
  res.status(200).json({ token: 'demo-token' });
};
