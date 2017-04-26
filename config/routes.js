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
// function secureRoute(req, res, next) {
//   if (!req.session.userId) {
//     return req.session.regenerate(() => {
//       req.flash('danger', 'You must be logged in.');
//       res.redirect('/login');
//     });
//   }
//
//   return next();
// }

router.get('/', (req, res) => {
  // if (res.locals.isLoggedIn) res.locals.message = `Welcome back ${res.locals.user.username}`;
  res.render('statics/home');
});

router.route('/favourite/artist/:id')
  .get(secureRoute, favourites.favArtist)
  .delete(secureRoute, favourites.deleteArtist);
router.route('/favourite/event/:id')
  .get(secureRoute, favourites.favEvent)
  .delete(secureRoute, favourites.deleteEvent);
router.route('/favourite/venue/:id')
  .get(secureRoute, favourites.favVenue)
  .delete(secureRoute, favourites.deleteVenue);

router.route('/show/users')
  .get(secureRoute, users.show);

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
