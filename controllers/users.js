const User = require('../models/user');

function usersAccount(req, res) {
  if (res.locals.user) {
    User
      .findById(res.locals.user.id)
      .then(user => {
        if(!user) {
          return console.log('No user found');
        }
        return res.render('statics/account', {user});
      });
  } else {
    res.redirect('/');
  }
}

function usersChange(req, res) {
  console.log('trying to change session');
  User
    .findById(res.locals.user.id)
    .exec()
    .then(user => {
      for (const field in req.body) {
        user[field] = req.body[field];
      }
      return user.save();
    })
    .then(() => {
      return res.redirect(`/account`);
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
    .findById(res.locals.user.id)
    .exec()
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      console.log(`Ajax error retrieving user to modify: ${err}`);
    });
}

function usersCreate(req, res) {
  User
  .create(req.body)
  .then(user => {
    console.log(`User ${user} created`);
    return res.redirect('/');
  })
  .catch((err) => {
    if (err.name === 'ValidationError') {
      return res.status(400).redirect('/');
    }
    res.status(500).end();
  });
}

function usersDelete(req, res) {
  User
    .findByIdAndRemove(res.locals.user.id)
    .exec()
    .then(() => {
      return req.session.regenerate(() => res.redirect('/'));
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = {
  account: usersAccount,
  show: usersShow,
  showOne: usersOne,
  change: usersChange,
  delete: usersDelete,
  createUser: usersCreate
};
