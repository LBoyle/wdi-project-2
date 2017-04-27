const User = require('../models/user');

function usersAccount(req, res) {
  if (res.locals.user) {
    User
      .findById(res.locals.user.id)
      .then(user => {
        if(!user) {
          console.log('No user found');
          return res.render('statics/error', {error: 'User not found'});
        }
        return res.render('statics/account', {user});
      })
      .catch(err => {
        console.log(`Error getting user: ${err}`);
        res.render('statics/error', {error: err});
      });
  } else {
    res.locals.message = 'Please login or register';
    res.redirect('/');
  }
}

function usersProfile(req, res) {
  // console.log(res.locals.user);
  User
    .findById(req.params.id)
    .then(user => {
      if(!user) {
        console.log('No user found');
        return res.render('statics/error', {error: 'User not found'});
      }
      console.log(res.locals.user);
      console.log(user);
      return res.render('statics/profile', {user, userLogged: res.locals.user});
    })
    .catch(err => {
      console.log(`Error getting user: ${err}`);
      res.render('statics/error', {error: err});
    });
}

function usersChange(req, res) {
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
      res.locals.message = 'Account details changed';
      return res.redirect(`/account`);
    })
    .catch(err => {
      console.log(`error: ${err}`);
      res.render('statics/error', {error: err});
    });
}

function usersShow(req, res) {
  User
    .find()
    .exec()
    .then(users => {
      res.json(users.map(user => {
        return {
          username: user.username,
          email: user.email,
          image: user.image,
          friends: user.friends,
          id: user.id
        };
      }));
    })
    .catch(err => {
      console.log(`Ajax error in /show/users ${err}`);
      res.render('statics/error', {error: err});
    });
}

function usersShowFriends(req, res) {
  User
    .findById(res.locals.user.id)
    .populate('friends')
    .exec()
    .then(user => {
      res.json(user.friends.map(friend => {
        return {
          username: friend.username,
          id: friend.id
        };
      }));
    })
    .catch(err => {
      console.log(err);
    });
}

function usersShowFriendsNotLogged(req, res) {
  User
    .findById(req.params.id)
    .populate('friends')
    .exec()
    .then(user => {
      res.json(user.friends.map(friend => {
        return {
          username: friend.username,
          id: friend.id
        };
      }));
    })
    .catch(err => {
      console.log(err);
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
      console.log(`Ajax error retrieving user: ${err}`);
      res.render('statics/error', {error: err});
    });
}

function usersCreate(req, res) {
  if (req.body.image === '') req.body.image = 'http://www.fillmurray.com/284/196';
  User
  .create(req.body)
  .then(user => {
    console.log(`User ${user} created`);
    res.locals.message = 'Thanks for registering, please login';
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
      return req.session.regenerate(() => {
        res.locals.message = 'User account deleted';
        res.redirect('/');
      });
    })
    .catch(err => {
      console.log(err);
      res.render('statics/error', {error: err});
    });
}

module.exports = {
  account: usersAccount,
  profile: usersProfile,
  show: usersShow,
  showOne: usersOne,
  change: usersChange,
  delete: usersDelete,
  createUser: usersCreate,
  showFriends: usersShowFriends,
  showFriendsNotLogged: usersShowFriendsNotLogged
};
