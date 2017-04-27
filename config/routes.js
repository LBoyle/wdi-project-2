const express = require('express');
const router  = express.Router();

// controllers
const artists = require('../controllers/artists');
const venues = require('../controllers/venues');
const events = require('../controllers/events');
const sessions = require('../controllers/sessions');
const users = require('../controllers/users');
const favourites = require('../controllers/favourites');

function secureRoute(req, res, next) {
  if (!req.session.userId) {
    return req.session.regenerate(() => {
      res.redirect('/');
    });
  }
  return next();
}

router.get('/', (req, res) => res.render('statics/home'));

router.route('/favourite/artist/:id')
  .get(secureRoute, favourites.favArtist)
  .delete(secureRoute, favourites.deleteArtist);
router.route('/favourite/event/:id')
  .get(secureRoute, favourites.favEvent)
  .delete(secureRoute, favourites.deleteEvent);
router.route('/favourite/venue/:id')
  .get(secureRoute, favourites.favVenue)
  .delete(secureRoute, favourites.deleteVenue);
router.route('/favourite/user/:id')
  .get(secureRoute, favourites.addFriend)
  .delete(secureRoute, favourites.deleteFriend);

router.route('/show/users')
  .get(users.show);
router.route('/show/friends')
  .get(secureRoute, users.showFriends);
router.route('/show/friends/:id')
  .get(users.showFriendsNotLogged)
  .delete(favourites.deleteFriend);
// using the same route for two unrelated operations

router.route('/account/user')
  .delete(secureRoute, users.delete)
  .put(secureRoute, users.change)
  .get(secureRoute, users.showOne);

router.route('/login')
  .post(sessions.login);

router.route('/logout')
  .get(sessions.logout);

router.route('/register')
  .post(users.createUser);

router.route('/account')
  .get(secureRoute, users.account);

router.route('/profile/:id')
  .get(users.profile);

router.route('/artist/:id')
  .get(artists.showOne);

router.route('/venue/:id')
  .get(venues.showOne);

router.route('/event/:id')
  .get(events.showOne);

module.exports = router;
