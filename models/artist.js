const mongoose = require('mongoose');

// const memberSchema = new mongoose.Schema({
//   name: {type: String, required: true, trim: true},
//   description: {type: String},
//   age: {type: Number},
//   instrument: {type: String, trim: true},
//   images: [{type: String, trim: true}]
// });
//
// const albumSchema = new mongoose.Schema({
//   name: {type: String, required: true, trim: true},
//   description: {type: String},
//   dateReleased: {type: Date},
//   tracks: [{type: String, trim: true}],
//   images: [{type: String, trim: true}]
// });
//
// const artistSchema = new mongoose.Schema({
//   name: {type: String, required: true, trim: true},
//   description: {type: String},
//   images: [{type: String, trim: true}],
//   members: [memberSchema],
//   albums: [albumSchema],
//   futureEvents: [{type: mongoose.Schema.ObjectId, ref: 'Event'}],
//   pastEvents: [{type: mongoose.Schema.ObjectId, ref: 'Event'}]
// },{
//   timestamps: true
// });

const artistSchema = new mongoose.Schema({
  name: {type: String, trim: true},
  type: {type: String, trim: true},
  id: {type: String, trim: true},
  test: {type: Boolean},
  url: {type: String, trim: true},
  locale: {type: String, trim: true},
  externalLinks: {
    youtube: [{url: {type: String, trim: true}}],
    twitter: [{url: {type: String, trim: true}}],
    facebook: [{url: {type: String, trim: true}}],
    instagram: [{url: {type: String, trim: true}}],
    musicbrainz: [{id: {type: String, trim: true} }]
  },
  images: [{
    ratio: {type: String, trim: true},
    url: {type: String, trim: true},
    width: {type: Boolean},
    height: {type: Number},
    fallback: {type: Boolean}
  }],
  classifications: {type: Object},
  _links: { self: { href: {type: String, trim: true} } }
});

module.exports = mongoose.model('Artist', artistSchema);
