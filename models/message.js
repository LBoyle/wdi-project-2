const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  sender: {type: mongoose.Schema.ObjectId, ref: 'User', required: true},
  recipient: {type: mongoose.Schema.ObjectId, ref: 'User', required: true},
  content: {type: String, required: true}
},{timestamps: true});

module.exports = mongoose.Schema('Message', messageSchema);
