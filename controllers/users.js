const User = require('../models/user');

function usersAccount(req, res) {
  User
    .findById(req.params.id)
    .then(user => {
      if(!user) {
        return console.log('No user found');
      }
      return res.render('statics/account', {user});
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
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(() => {
      return req.session.regenerate(() => res.redirect('/'));
    })
    .catch(err => {
      console.log(err);
    });
}

function addFavArtist(req, res) {
  User
    .findById(req.params.userId)
    .exec()
    .then(user => {
      user.favArtists.push(req.params.id);
      user.save();
      return res.redirect(`/artist/${req.params.id}`);
    })
    .catch(err => {
      console.log(`Error adding favourite Artist: ${err}`);
    });
}

function addFavEvent(req, res) {
  User
    .findById(req.params.userId)
    .exec()
    .then(user => {
      user.favEvent.push(req.params.id);
      user.save();
      return res.redirect(`/event/${req.params.id}`);
    })
    .catch(err => {
      console.log(`Error adding favourite Event: ${err}`);
    });
}

function addFavVenue(req, res) {
  User
    .findById(req.params.userId)
    .exec()
    .then(user => {
      user.favVenue.push(req.params.id);
      user.save();
      return res.redirect(`/venue/${req.params.id}`);
    })
    .catch(err => {
      console.log(`Error adding favourite Venue: ${err}`);
    });
}

module.exports = {
  account: usersAccount,
  show: usersShow,
  showOne: usersOne,
  change: usersChange,
  delete: usersDelete,
  createUser: usersCreate,
  favArtist: addFavArtist,
  favEvent: addFavEvent,
  favVenue: addFavVenue
};
