// const mongoose = require('mongoose');

// const venueSchema = new mongoose.Schema({
//   name: {type: String, required: true, trim: true},
//   description: {type: String, trim: true},
//   capacity: {type: Number},
//   futureEvents: [{type: mongoose.Schema.ObjectId, ref: 'Event'}],
//   pastEvents: [{type: mongoose.Schema.ObjectId, ref: 'Event'}],
//   location: {type: String, required: true, trim: true},
//   lat: {type: Number},
//   lng: {type: Number},
//   images: [{type: String, trim: true}]
// });

const venueSchema = new mongoose.Schema({
  name: {type: String, trim: true},
  type: {type: String, trim: true},
  id: {type: String, trim: true},
  url: {type: String, trim: true},
  locale: {type: String, trim: true},
  postalCode: {type: String, trim: true},
  timezone: {type: String, trim: true},
  city: { name: {type: String, trim: true} },
  country: { name: {type: String, trim: true}, countryCode: {type: String, trim: true} },
  address: { line1: {type: String, trim: true} },
  location: { longitude: {type: String, trim: true}, latitude: {type: String, trim: true} }
});

// module.exports = mongoose.model('Venue', venueSchema);
