const { Question } = require('../models');

exports.createQuestion = async (req, res) => {
  try {
    const question = await Question.create(req.body);
    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateQuestion = async (req, res) => {
  try {
    const question = await Question.findByPk(req.params.questionId);
    if (!question) return res.status(404).json({ error: 'Question not found' });

    await question.update(req.body);
    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteQuestion = async (req, res) => {
  try {
    const question = await Question.findByPk(req.params.questionId);
    if (!question) return res.status(404).json({ error: 'Question not found' });

    await question.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
