const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {type: String, required: true, trim: true},
  email: {type: String, required: true, trim: true},
  password: {type: String, required: true, trim: true},
  favEvents: [{type: mongoose.Schema.ObjectId, ref: 'Event'}],
  favVenues: [{type: mongoose.Schema.ObjectId, ref: 'Venue'}],
  favArtists: [{type: mongoose.Schema.ObjectId, ref: 'Artist'}]
});

module.exports = mongoose.model('User', userSchema);
