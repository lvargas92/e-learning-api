const { Course, Lesson, Question, Answer } = require('../models');

exports.listCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.listLessons = async (req, res) => {
  try {
    const lessons = await Lesson.findAll({ where: { courseId: req.params.courseId } });
    res.status(200).json(lessons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLessonDetails = async (req, res) => {
  try {
    const lesson = await Lesson.findByPk(req.params.lessonId, {
      include: [{
        model: Question,
        include: [Answer]
      }]
    });
    if (!lesson) return res.status(404).json({ error: 'Lesson not found' });
    res.status(200).json(lesson);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
