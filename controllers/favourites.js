const User = require('../models/user');

function addFavArtist(req, res) {
  User
    .findById(req.params.userId)
    .exec()
    .then(user => {
      user.favArtists.push(req.params.id);
      user.save();
      return res.redirect(`/artist/${req.params.id}`);
    })
    .catch(err => {
      console.log(`Error adding favourite Artist: ${err}`);
    });
}

function addFavEvent(req, res) {
  User
    .findById(req.params.userId)
    .exec()
    .then(user => {
      user.favEvents.push(req.params.id);
      user.save();
      return res.redirect(`/event/${req.params.id}`);
    })
    .catch(err => {
      console.log(`Error adding favourite Event: ${err}`);
    });
}

function addFavVenue(req, res) {
  User
    .findById(req.params.userId)
    .exec()
    .then(user => {
      user.favVenues.push(req.params.id);
      user.save();
      return res.redirect(`/venue/${req.params.id}`);
    })
    .catch(err => {
      console.log(`Error adding favourite Venue: ${err}`);
    });
}

module.exports = {
  favArtist: addFavArtist,
  favEvent: addFavEvent,
  favVenue: addFavVenue
};
