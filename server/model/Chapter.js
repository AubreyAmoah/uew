const mongoose = require('mongoose');

const date = new Date()
const profilePath = 'http://localhost:5002/default.png';
const chapterSchema = new mongoose.Schema({
    chapter_cover:{ type: String, default: profilePath},
    chapter_name:{ type: String},
    date_added:{ type: Date, default: date},
    parent:{type: mongoose.Schema.Types.ObjectId, ref: 'courses'}
});

module.exports = mongoose.model('chapter', chapterSchema);