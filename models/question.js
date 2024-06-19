module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define('Question', {
      text: DataTypes.TEXT,
      type: DataTypes.STRING, // 'boolean', 'single', 'multiple'
      lessonId: DataTypes.INTEGER
    }, {});
    Question.associate = function(models) {
      Question.belongsTo(models.Lesson, { foreignKey: 'lessonId' });
      Question.hasMany(models.Answer, { foreignKey: 'questionId' });
    };
    return Question;
  };
  