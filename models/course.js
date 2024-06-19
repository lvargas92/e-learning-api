module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('Course', {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      teacherId: DataTypes.INTEGER
    }, {});
    Course.associate = function(models) {
      Course.belongsTo(models.User, { as: 'teacher', foreignKey: 'teacherId' });
      Course.hasMany(models.Lesson, { foreignKey: 'courseId' });
    };
    return Course;
  };
  