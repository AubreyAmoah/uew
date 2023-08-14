const mongoose = require('mongoose');

const date = new Date();
const profilePath = 'http://localhost:5002/default.png';
const courseSchema = new mongoose.Schema({
    course_name: { type: String },
    course_code: { type: String },
    enrollment_key : { type: String },
    course_cover: { type: String, default: profilePath},
    date_added: { type: Date, default: date},
    students: [{type: mongoose.Schema.Types.ObjectId, ref: 'users'}],
    owner:{type: mongoose.Schema.Types.ObjectId, ref: 'users'}
});

module.exports = mongoose.model('course', courseSchema);