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


module.exports = {
  login: sessionsCreate,
  logout: sessionsDelete
};
