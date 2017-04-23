const User = require('../models/user');

function sessionsCreate(req, res) {
  User
    .findOne({email: req.body.email})
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)) {
        // req.flash('danger', 'Unknown email/password combination');
        return res.redirect('/');
      }
      req.session.userId = user.id;
      return res.redirect('/');
    });
}

function sessionsDelete(req, res) {
  return req.session.regenerate(() => res.redirect('/'));
}

function sessionsAccount(req, res) {
  User
    .findById(req.params.id)
    .then(user => {
      if(!user) {
        return console.log('No user found');
      }
      return res.render('statics/account', user);
    });
}

function usersShow(req, res) {
  User
    .find()
    .exec()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      console.log(`Ajax error in /show/users ${err}`);
    });
}

function usersOne(req, res) {
  console.log(req.params);
  User
    .findById(req.params.id)
    .exec()
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      console.log(`Ajax error retrieving user to modify: ${err}`);
    });
}

module.exports = {
  login: sessionsCreate,
  logout: sessionsDelete,
  account: sessionsAccount,
  show: usersShow,
  showOne: usersOne
};
