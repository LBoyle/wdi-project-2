const User = require('../models/user');

function addFavArtist(req, res) {
  User
    .findById(res.locals.user.id)
    .exec()
    .then(user => {
      user.favArtists.push(req.params.id);
      user.save();
      return res.redirect(`/artist/${req.params.id}`);
    })
    .catch(err => {
      console.log(`Error adding favourite Artist: ${err}`);
      res.render('statics/error', {error: err});
    });
}

function deleteFavArtist(req, res) {
  User
    .findById(res.locals.user.id)
    .exec()
    .then(user => {
      user.favArtists.forEach(artist => {
        if (artist === req.params.id) {
          user.favArtists.splice(user.favArtists.indexOf(req.params.id), 1);
        }
      });
      user.save();
      return res.redirect('/account');
    })
    .catch(err => {
      console.log('Error deleting Artist: '+err);
      res.render('statics/error', {error: err});
    });
}

function addFavEvent(req, res) {
  User
    .findById(res.locals.user.id)
    .exec()
    .then(user => {
      user.favEvents.push(req.params.id);
      user.save();
      return res.redirect(`/event/${req.params.id}`);
    })
    .catch(err => {
      console.log(`Error adding favourite Event: ${err}`);
      res.render('statics/error', {error: err});
    });
}

function deleteFavEvent(req, res) {
  User
    .findById(res.locals.user.id)
    .exec()
    .then(user => {
      user.favEvents.forEach(event => {
        if (event === req.params.id) {
          user.favEvents.splice(user.favEvents.indexOf(req.params.id), 1);
        }
      });
      user.save();
      return res.redirect('/account');
    })
    .catch(err => {
      console.log('Error deleting Event: '+err);
      res.render('statics/error', {error: err});
    });
}

function addFavVenue(req, res) {
  User
    .findById(res.locals.user.id)
    .exec()
    .then(user => {
      user.favVenues.push(req.params.id);
      user.save();
      return res.redirect(`/venue/${req.params.id}`);
    })
    .catch(err => {
      console.log(`Error adding favourite Venue: ${err}`);
      res.render('statics/error', {error: err});
    });
}

function deleteFavVenue(req, res) {
  User
    .findById(res.locals.user.id)
    .exec()
    .then(user => {
      user.favVenues.forEach(venue => {
        if (venue === req.params.id) {
          user.favVenues.splice(user.favVenues.indexOf(req.params.id), 1);
        }
      });
      user.save();
      return res.redirect('/account');
    })
    .catch(err => {
      console.log('Error deleting Venue: '+err);
      res.render('statics/error', {error: err});
    });
}

module.exports = {
  favArtist: addFavArtist,
  deleteArtist: deleteFavArtist,
  favEvent: addFavEvent,
  deleteEvent: deleteFavEvent,
  favVenue: addFavVenue,
  deleteVenue: deleteFavVenue
};
