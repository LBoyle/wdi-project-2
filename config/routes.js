const express = require('express');
const router  = express.Router();

// controllers
const artists = require('../controllers/artists');
const venues = require('../controllers/venues');
const events = require('../controllers/events');
const sessions = require('../controllers/sessions');

router.get('/', (req, res) => {
  // if (res.locals.isLoggedIn) res.locals.message = `Welcome back ${res.locals.user.username}`;
  res.render('statics/home');
});

router.route('/show/users')
  .get(sessions.show);

router.route('/account/user/:id')
  .put(sessions.change)
  .get(sessions.showOne);

router.route('/login')
  .post(sessions.login);

router.route('/logout')
  .get(sessions.logout);

router.route('/account/:id')
  .get(sessions.account);

router.route('/artists')
  .get(artists.show);
router.route('/artist/:id')
  .get(artists.showOne);

router.route('/venues')
  .get(venues.show);
router.route('/venue/:id')
  .get(venues.showOne);

router.route('/events')
  .get(events.show);
router.route('/event/:id')
  .get(events.showOne);

module.exports = router;
