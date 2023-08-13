const mongoose = require('mongoose');

const date = new Date()
const videoSchema = new mongoose.Schema({
    video_title : { type: String},
    video_description : { type: String},
    video_path : { type: String },
    date_added:{ type: Date, default: date},
    parent:{type: mongoose.Schema.Types.ObjectId, ref: 'chapters'},
    owner:{type: mongoose.Schema.Types.ObjectId, ref: 'users'}
});

module.exports = mongoose.model('video', videoSchema);