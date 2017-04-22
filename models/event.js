const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {type: String, required: true, trim: true},
  description: {type: String, required: true, trim: true},
  startTime: {type: Date},
  endTime: {type: Date},
  location: {type: String, required: true, trim: true},
  venue: {type: mongoose.Schema.ObjectId, ref: 'Venue'},
  artists: [{type: mongoose.Schema.ObjectId, ref: 'Artist'}],
  images: [{type: String, trim: true}]
},{
  timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);
