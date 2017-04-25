// const Venue = require('../models/venue');
const rp = require('request-promise');

// function venuesShow(req, res) {
//   Venue
//     .find()
//     .exec()
//     .then(venues => {
//       res.json(venues);
//     })
//     .catch(err => {
//       console.log('Route error: '+err);
//     });
// }

function venuesOne(req, res) {
  // Venue
  //   .findById(req.params.id)
  //   .exec()
  //   .then(venue => {
  //     res.render('venues/venue', {venue});
  //   })
  //   .catch(err => {
  //     console.log('Route error: '+err);
  //   });
  const options = {
    uri: `https://app.ticketmaster.com/discovery/v2/venues/${req.params.id}.json?apikey=sJdyvBFWmrZySkRDzJ2v0wNi2qtLb7pn`,
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  }; // event
  rp(options)
    .then(venue => {
      console.log(venue);
      return res.render('venues/venue', {venue});
    })
    .catch(err => {
      console.log('Route error: '+err);
    });
}

module.exports = {
  // show: venuesShow,
  showOne: venuesOne
};
