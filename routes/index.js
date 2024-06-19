const express = require('express');
const router = express.Router();

const courseController = require('../controllers/courseController');
const lessonController = require('../controllers/lessonController');
const questionController = require('../controllers/questionController');
const studentController = require('../controllers/studentController');
const { submitAnswer } = require('../controllers/answerController');

// Routes for Courses
router.get('/courses', studentController.listCourses);
router.get('/courses/:courseId/lessons', studentController.listLessons);
router.get('/lessons/:lessonId', studentController.getLessonDetails);

router.post('/courses', courseController.createCourse);
router.put('/courses/:courseId', courseController.updateCourse);
router.delete('/courses/:courseId', courseController.deleteCourse);

// Routes for Lessons
router.post('/lessons', lessonController.createLesson);
router.put('/lessons/:lessonId', lessonController.updateLesson);
router.delete('/lessons/:lessonId', lessonController.deleteLesson);

// Routes for Questions
router.post('/questions', questionController.createQuestion);
router.put('/questions/:questionId', questionController.updateQuestion);
router.delete('/questions/:questionId', questionController.deleteQuestion);

router.post('/answers', authenticateToken, submitAnswer);

module.exports = router;
