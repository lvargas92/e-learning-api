module.exports = (sequelize, DataTypes) => {
    const Answer = sequelize.define('Answer', {
      text: DataTypes.TEXT,
      correct: DataTypes.BOOLEAN,
      questionId: DataTypes.INTEGER
    }, {});
    Answer.associate = function(models) {
      Answer.belongsTo(models.Question, { foreignKey: 'questionId' });
    };
    return Answer;
  };
  