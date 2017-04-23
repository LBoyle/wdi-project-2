const express = require('express');
const router  = express.Router();

// controllers
const auth = require('../controllers/auth');
const artists = require('../controllers/artists');
const venues = require('../controllers/venues');
const events = require('../controllers/events');

router.get('/', (req, res) => res.render('statics/home'));

router.route('/show/users')
  .get(auth.show);

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
