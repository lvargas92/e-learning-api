const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config()

exports.verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.userId);
    if (!user) return res.status(401).json({ error: 'Unauthorized' });

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

exports.isTeacher = (req, res, next) => {
  if (req.user.role !== 'teacher') return res.status(403).json({ error: 'Forbidden' });
  next();
};
