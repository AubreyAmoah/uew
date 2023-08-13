const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  address: { type: String, required: [true,'Please provide address'], unique: true },
  recently_accessed: [{type: mongoose.Schema.Types.ObjectId, ref: 'courses'}],
  loggin_in_as: {type:String}
});

module.exports = mongoose.model("user", userSchema);