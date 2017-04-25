// const Event = require('../models/event');
const rp = require('request-promise');

// function eventsShow(req, res) {
//   Event
//     .find()
//     .exec()
//     .then(events => {
//       res.json(events);
//     })
//     .catch(err => {
//       console.log('Route error: '+err);
//     });
// }

function eventsOne(req, res) {
  // Event
  //   .findById(req.params.id)
  //   .exec()
  //   .then(event => {
  //     res.render('events/event', {event});
  //   })
  //   .catch(err => {
  //     console.log('Route error: '+err);
  //   });
  const options = {
    uri: `https://app.ticketmaster.com/discovery/v2/events/${req.params.id}.json?apikey=sJdyvBFWmrZySkRDzJ2v0wNi2qtLb7pn`,
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  }; // event
  rp(options)
    .then(event => {
      console.log(event);
      return res.render('events/event', {event});
    })
    .catch(err => {
      console.log('Route error: '+err);
    });
}

module.exports = {
  // show: eventsShow,
  showOne: eventsOne
};
