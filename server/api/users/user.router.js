const { userLogin, userUpdate, createCourse, getAllCourses, getCourse, getMyCourses, findCourseByName, deleteCourseByID, updateCourse, updateCourseImage, createChapter, updateChapter, getChapter, getAllChapters, findChapterByName, createVideo, getVideo, getAllVideos, findVideoByName } = require('./user.controller');
const fileUpload = require('express-fileupload');

const filesPayloadExists = require('../../middleware/filesPayloadExists');
const filesExtLimiter = require('../../middleware/fileExtLimiter');
const filesSizeLimiter = require('../../middleware/fileSizeLimiter');

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
router.delete('/course/delete/:id', deleteCourseByID);


//Course Chapters Routes
router.post('/create/chapter/:id', createChapter);
router.get('/get/chapter/:id', getChapter);
router.get('/get/chapters/:id', getAllChapters);
router.get('/get/chapter/search/:id', findChapterByName);
router.patch('/chapter/update/:id', updateChapter);

//Video
router.post('/create/video/:chapter_id', fileUpload({ createParentPath: true }), filesPayloadExists, filesExtLimiter(['.mp4','.mkv']), filesSizeLimiter, createVideo);

router.get('/get/video/:id', getVideo);
router.get('/get/videos/:id', getAllVideos);
router.get('/get/video/search/:id', findVideoByName);
router.delete('/video/delete/:id', deleteCourseByID);


module.exports = router;