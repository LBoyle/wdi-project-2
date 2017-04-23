const User = require('../models/user');

function sessionsCreate(req, res) {
  User
    .findOne({email: req.body.email})
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)) {
        // req.flash('danger', 'Unknown email/password combination');
        return res.status(401).render('statics/home');
      }
      req.session.userId = user.id;
      console.log('welcome back '+user.name);
      return res.redirect('/');
    });
}

function sessionsDelete(req, res) {
  return req.session.regenerate(() => res.redirect('/'));
}

module.exports = {
  login: sessionsCreate,
  logout: sessionsDelete
};
