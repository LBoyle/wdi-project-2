const express = require('express');
const router  = express.Router();

// controllers
const artists = require('../controllers/artists');
const venues = require('../controllers/venues');
const events = require('../controllers/events');
const sessions = require('../controllers/sessions');
const users = require('../controllers/users');

router.get('/', (req, res) => {
  // if (res.locals.isLoggedIn) res.locals.message = `Welcome back ${res.locals.user.username}`;
  res.render('statics/home');
});

router.route('/show/users')
  .get(users.show);

router.route('/favourite/artist/:userId/:id')
  .get(users.favArtist);
router.route('/favourite/event/:userId/:id')
  .get(users.favEvent);
router.route('/favourite/venue/:userId/:id')
  .get(users.favVenue);

router.route('/account/user/:id')
  .delete(users.delete)
  .put(users.change)
  .get(users.showOne);

router.route('/login')
  .post(sessions.login);

router.route('/logout')
  .get(sessions.logout);

router.route('/register')
  .post(users.createUser);

router.route('/account/:id')
  .get(users.account);

// router.route('/artists')
//   .get(artists.show);
router.route('/artist/:id')
  .get(artists.showOne);

// router.route('/venues')
//   .get(venues.show);
router.route('/venue/:id')
  .get(venues.showOne);

// router.route('/events')
//   .get(events.show);
router.route('/event/:id')
  .get(events.showOne);

module.exports = router;
