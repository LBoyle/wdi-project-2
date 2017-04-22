const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
  name: {type: String, required: true, trim: true},
  description: {type: String, required: true, trim: true},
  capacity: {type: Number},
  futureEvents: [{type: mongoose.Schema.ObjectId, ref: 'Event'}],
  pastEvents: [{type: mongoose.Schema.ObjectId, ref: 'Event'}],
  location: {type: String, required: true, trim: true},
  lat: {type: Number, required: true},
  lng: {type: Number, required: true},
  images: [{type: String, trim: true}]
});

module.exports = mongoose.model('Venue', venueSchema);
