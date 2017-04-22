const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: {type: String, required: true, trim: true},
  description: {type: String},
  age: {type: Number},
  instrument: {type: String, trim: true},
  images: [{type: String, trim: true}]
});

const albumSchema = new mongoose.Schema({
  name: {type: String, required: true, trim: true},
  description: {type: String},
  dateReleased: {type: Date},
  tracks: [{type: String, trim: true}],
  images: [{type: String, trim: true}]
});

const artistSchema = new mongoose.Schema({
  name: {type: String, required: true, trim: true},
  description: {type: String},
  images: [{type: String, trim: true}],
  members: [memberSchema],
  albums: [albumSchema],
  futureEvents: [{type: mongoose.Schema.ObjectId, ref: 'Event'}],
  pastEvents: [{type: mongoose.Schema.ObjectId, ref: 'Event'}]
},{
  timestamps: true
});

module.exports = mongoose.model('Artist', artistSchema);
