const { userLogin, userUpdate, createCourse, getAllCourses, getCourse, getMyCourses, findCourseByName, deleteCourseByID, updateCourse, updateCourseImage, createChapter } = require('./user.controller');

const router = require('express').Router();

// User Routes
router.post('/login', userLogin);
router.patch('/update', userUpdate);

//Course Routes
router.post('/create/course', createCourse);
router.get('/get/course', getCourse);
router.get('/get/my/courses', getMyCourses);
router.get('/get/courses', getAllCourses);
router.get('/get/courses/search', findCourseByName);
router.patch('/course/update/:id', updateCourse);
router.patch('/course/update/image/:id', updateCourseImage);
router.post('/create/chapter', createChapter);
router.delete('/course/delete/:id', deleteCourseByID);

//Course Chapters Routes



module.exports = router;