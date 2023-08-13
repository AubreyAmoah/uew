const mongoose = require('mongoose');

const date = new Date()
const videoCommentSchema = new mongoose.Schema({
    comment_content : { type: String },
    date_added:{ type: Date, default: date},
    sender:{ type: String},
    owner : { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    parent:{type: mongoose.Schema.Types.ObjectId, ref: 'chapters'}
});

module.exports = mongoose.model('video_comment', videoCommentSchema);