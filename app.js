const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const routes = require('./routes');
const authRoutes = require('./routes/auth');
const { verifyToken } = require('./middlewares/auth');

require('dotenv').config()
const app = express();
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use(verifyToken);  // Apply token verification middleware to all other routes
app.use('/', routes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
