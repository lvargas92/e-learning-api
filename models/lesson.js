module.exports = (sequelize, DataTypes) => {
    const Lesson = sequelize.define('Lesson', {
      title: DataTypes.STRING,
      courseId: DataTypes.INTEGER,
      threshold: DataTypes.FLOAT
    }, {});
    Lesson.associate = function(models) {
      Lesson.belongsTo(models.Course, { foreignKey: 'courseId' });
      Lesson.hasMany(models.Question, { foreignKey: 'lessonId' });
    };
    return Lesson;
  };
  