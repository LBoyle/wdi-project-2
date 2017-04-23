const User = require('../models/user');

function sessionsCreate(req, res) {
  User
    .findOne({email: req.body.email})
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)) {
        res.locals.message = 'Unknown email/password combination';
        return res.render('statics/home');
      }
      req.session.userId = user.id;
      // res.locals.message = `welcome back, ${user.username}`;
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
      // res.locals.message = `${res.locals.user.username}`;
      return res.render('statics/account');
    });
}

function usersChange(req, res) {
  console.log('trying to change session');
  User
    .findById(req.params.id)
    .exec()
    .then(user => {
      for (const field in req.body) {
        user[field] = req.body[field];
      }
      return user.save();
    })
    .then(user => {
      // res.locals.message = 'Account updated';
      return res.redirect(`/account/${user.id}`);
    })
    .catch(err => {
      console.log(`error: ${err}`);
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

function usersDelete(req, res) {
  User
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(() => {
      return sessionsDelete(req, res);
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = {
  login: sessionsCreate,
  logout: sessionsDelete,
  account: sessionsAccount,
  show: usersShow,
  showOne: usersOne,
  change: usersChange,
  delete: usersDelete
};
