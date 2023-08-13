const mongoose = require('mongoose');

const date = new Date()
const notificationSchema = new mongoose.Schema({
    notification : [{ type: String}],
    date_added:{ type: Date, default: date},
    owner:{type: mongoose.Schema.Types.ObjectId, ref: 'users'}
});

module.exports = mongoose.model('notification', notificationSchema);