const mongoose = require('mongoose');

// const eventSchema = new mongoose.Schema({
//   name: {type: String, trim: true},
//   description: {type: String, trim: true},
//   startTime: {type: Date},
//   endTime: {type: Date},
//   location: {type: String, trim: true},
//   venue: {type: mongoose.Schema.ObjectId, ref: 'Venue'},
//   artists: [{type: mongoose.Schema.ObjectId, ref: 'Artist'}],
//   images: [{type: String, trim: true}]
// },{
//   timestamps: true
// });

const eventSchema = ({
  name: {type: String, trim: true},
  type: {type: String, trim: true},
  id: {type: String, trim: true},
  url: {type: String, trim: true},
  locale: {type: String, trim: true},
  images: [
    {
      ratio: {type: String, trim: true},
      url: {type: String, trim: true},
      width: {type: Number},
      height: {type: Number},
      fallback: {type: Boolean}
    }
  ],
  sales: {
    public: {
      startDateTime: {type: String, trim: true},
      startTBD: {type: Boolean},
      endDateTime: {type: String, trim: true}
    }
  },
  dates: {
    start: {
      localDate: {type: String, trim: true},
      localTime: {type: String, trim: true},
      dateTime: {type: String, trim: true},
      dateTBD: {type: Boolean},
      dateTBA: {type: Boolean},
      timeTBA: {type: Boolean},
      noSpecificTime: {type: Boolean}
    },
    timezone: {type: String, trim: true},
    status: { code: {type: String, trim: true} },
    spanMultipleDays: {type: Boolean}
  },
  promoter: {
    id: {type: String, trim: true},
    name: {type: String, trim: true},
    description: {type: String, trim: true}
  },
  _links: {
    self: { href: {type: String, trim: true} },
    attractions: [ { href: {type: String, trim: true} } ],
    venues: [ { href: {type: String, trim: true} } ]
  }
});

module.exports = mongoose.model('Event', eventSchema);
