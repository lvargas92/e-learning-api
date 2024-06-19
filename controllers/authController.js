const bcrypt = require('bcrypt');
const { User } = require('../models');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { username, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ username, password: hashedPassword, role });
  const token = jwt.sign({ userId: user.id, role: user.role }, 'your_jwt_secret');
  res.status(201).json({ token });
};


exports.login = async (req, res) => {
  const { username, password } = req.body;

  // Busca el usuario en la base de datos por nombre de usuario
  const user = await User.findOne({ where: { username } });

  // Si el usuario no existe, retorna 401
  if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Verifica la contraseña
  const isValidPassword = await bcrypt.compare(password, user.password);

  // Si la contraseña no coincide, retorna 401
  if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Genera un token JWT
  const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

  // Retorna el token como respuesta
  res.json({ token });
};
