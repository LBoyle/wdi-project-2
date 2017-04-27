const User = require('../models/user');

function addFavArtist(req, res) {
  User
    .findById(res.locals.user.id)
    .exec()
    .then(user => {
      user.favArtists.push({tmId: req.params.id});
      user.save();
      res.locals.message = 'Artist added to favourites';
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
      res.locals.message = 'Artist removed from favourites';
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
      user.favEvents.push({tmId: req.params.id});
      user.save();
      res.locals.message = 'Event added to favourites';
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
      res.locals.message = 'Event removed from favourites';
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
      user.favVenues.push({tmId: req.params.id});
      user.save();
      res.locals.message = 'Venue added to favourites';
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
      res.locals.message = 'Venue removed from favourites';
      return res.redirect('/account');
    })
    .catch(err => {
      console.log('Error deleting Venue: '+err);
      res.render('statics/error', {error: err});
    });
}

function addFriend(req, res) {
  User
    .findById(res.locals.user.id)
    .exec()
    .then(user => {
      user.friends.push(req.params.id);
      user.save();
      res.locals.message = 'User added to friends';
      return res.redirect(`/profile/${req.params.id}`);
    })
    .catch(err => {
      console.log(`Error adding favourite Artist: ${err}`);
      res.render('statics/error', {error: err});
    });
}

function deleteFriend(req, res) {
  User
    .findById(res.locals.user.id)
    .exec()
    .then(user => {
      user.friends.forEach(friend => {
        if (String(friend) === req.params.id) {
          console.log('Same');
          console.log(user.friends.indexOf(req.params.id));
          user.friends.splice(user.friends.indexOf(req.params.id), 1);
        }
      });
      user.save();
      res.locals.message = 'Friend deleted';
      return res.redirect('/account');
    })
    .catch(err => {
      console.log('Error deleting Friend: '+err);
      res.render('statics/error', {error: err});
    });
}

module.exports = {
  favArtist: addFavArtist,
  deleteArtist: deleteFavArtist,
  favEvent: addFavEvent,
  deleteEvent: deleteFavEvent,
  favVenue: addFavVenue,
  deleteVenue: deleteFavVenue,
  addFriend: addFriend,
  deleteFriend: deleteFriend
};
