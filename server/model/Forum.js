const mongoose = require('mongoose');

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const currentDate = new Date();
const currentDayIndex = currentDate.getDay();
const currentDayName = daysOfWeek[currentDayIndex];

let hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const ampm = hours >= 12 ? 'PM' : 'AM';

// Convert hours from 24-hour to 12-hour format
hours = hours % 12;
hours = hours ? hours : 12; // If hours is 0, set it to 12

const currentTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;

const forumSchema = new mongoose.Schema({
    forum_text : { type: String},
    forum_day : { type: String, default: currentDayName},
    forum_time : { type: String, default: currentTime },
    date_added:{ type: Date, default: currentDate},
    sender:{type: String},
    owner:{type: mongoose.Schema.Types.ObjectId, ref: 'users'},
    parent:{type: mongoose.Schema.Types.ObjectId, ref: 'courses'}
});

module.exports = mongoose.model('forum', forumSchema);