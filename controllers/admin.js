const User = require('../models/user');

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
  show: usersShow,
  showOne: usersOne
};
