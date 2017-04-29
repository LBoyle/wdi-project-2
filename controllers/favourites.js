const User = require('../models/user');

function addFavArtist(req, res) {
  User
    .findById(res.locals.user.id)
    .exec()
    .then(user => {
      user.favArtists.push({tmId: req.params.id});
      user.save();
      res.locals.message = 'Artist added to favourites';
      return res.redirect('/');
      // return;
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
      for (var i = 0; i < user.favArtists.length; i++) {
        if (user.favArtists[i].tmId === req.params.id) {
          user.favArtists.splice(i, 1);
        }
      }
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
      return res.redirect('/');
      // return;
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
      for (var i = 0; i < user.favEvents.length; i++) {
        if (user.favEvents[i].tmId === req.params.id) {
          user.favEvents.splice(i, 1);
        }
      }
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
      return res.redirect('/');
      // return;
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
      for (var i = 0; i < user.favVenues.length; i++) {
        if (user.favVenues[i].tmId === req.params.id) {
          user.favVenues.splice(i, 1);
        }
      }
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
      if (user.friends.indexOf(req.params.id) === -1) {
        user.friends.push(req.params.id);
        user.save();
        return User
          .findById(req.params.id)
          .exec()
          .then(user => {
            user.friends.push(res.locals.user.id);
            user.save();
            res.locals.message = 'User added to friends';
            return res.redirect(`/profile/${req.params.id}`);
          })
          .catch(err => {
            console.log(`Error adding you to your new friend's list: ${err}`);
            res.render('statics/error', {error: err});
          });
      } else {
        return res.redirect(`/profile/${req.params.id}`);
      }
    })
    .catch(err => {
      console.log(`Error adding friend: ${err}`);
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
          user.friends.splice(user.friends.indexOf(req.params.id), 1);
        }
      });
      user.save();
      return User
        .findById(req.params.id)
        .exec()
        .then(user => {
          user.friends.forEach(friend => {
            if (String(friend) === res.locals.user.id) {
              user.friends.splice(user.friends.indexOf(res.locals.user.id), 1);
            }
          });
          user.save();
          res.locals.message = 'Friend deleted';
          return res.redirect('/account');
          // return; // for use when I work out how to update the dom properly
        })
        .catch(err => {
          console.log('Error deleting Friend: '+err);
          res.render('statics/error', {error: err});
        });
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
