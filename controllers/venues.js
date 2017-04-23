const Venue = require('../models/venue');

function venuesShow(req, res) {
  Venue
    .find()
    .exec()
    .then(venues => {
      res.json(venues);
    })
    .catch(err => {
      console.log('Route error: '+err);
    });
}

function venuesOne(req, res) {
  Venue
    .findById(req.params.id)
    .exec()
    .then(venue => {
      res.render('venues/venue', {venue});
    })
    .catch(err => {
      console.log('Route error: '+err);
    });
}

module.exports = {
  show: venuesShow,
  showOne: venuesOne
};
