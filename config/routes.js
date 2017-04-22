const express = require('express');
const router  = express.Router();

const User = require('../models/user');
const Artist = require('../models/artist');
const Venue = require('../models/venue');
const Event = require('../models/event');

// One actual regular get route
router.get('/', (req, res) => res.render('statics/home'));

// AJAX routes
// route for Users
router.get('/show/users', (req, res) => {
  User
    .find()
    .exec()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      console.log(`Ajax error in /show/users ${err}`);
    });
});

router.get('/artists', (req, res) => {
  Artist
    .find()
    .exec()
    .then(artists => {
      // res.render('artists/artists', {artists});
      res.json(artists);
    })
    .catch(err => {
      console.log('Route error: '+err);
    });
});

router.get('/artist/:id', (req, res) => {
  Artist
    .findById(req.params.id)
    .exec()
    .then(artist => {
      res.render('artists/artist', {artist});
    })
    .catch(err => {
      console.log('Route error: '+err);
    });
});

router.get('/venues', (req, res) => {
  Venue
    .find()
    .exec()
    .then(venues => {
      res.json(venues);
    })
    .catch(err => {
      console.log('Route error: '+err);
    });
});

router.get('/venue/:id', (req, res) => {
  console.log(req.params.id+'  : venue/id');
  Venue
    .findById(req.params.id)
    .exec()
    .then(venue => {
      res.render('venues/venue', {venue});
    })
    .catch(err => {
      console.log('Route error: '+err);
    });
});

router.get('/events', (req, res) => {
  Event
    .find()
    .exec()
    .then(events => {
      res.json(events);
    })
    .catch(err => {
      console.log('Route error: '+err);
    });
});

router.get('/event/:id', (req, res) => {
  console.log(req.params.id+'  : event/id');
  Event
    .findById(req.params.id)
    .exec()
    .then(event => {
      res.render('events/event', {event});
    })
    .catch(err => {
      console.log('Route error: '+err);
    });
});


module.exports = router;




// old code below

// router.get('/show', (req, res) => {
//   User
//     .find()
//     .exec()
//     .then(users => {
//       if (!users) res.render('statics/home', {users: undefined});
//       return res.render('statics/home', {users});
//     })
//     .catch(err => {
//       console.log(`Route error: ${err}`);
//     });
// });

// router.get('/show/test', (req, res) => res.render('statics/test'));
