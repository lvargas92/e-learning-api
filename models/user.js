module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING // 'student' or 'teacher'
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
