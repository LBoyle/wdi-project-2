const express = require('express');
const router  = express.Router();

const User = require('../models/user');

// One actual get route
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
