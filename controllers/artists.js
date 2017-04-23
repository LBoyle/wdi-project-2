const Artist = require('../models/artist');

function artistsShow(req, res) {
  Artist
    .find()
    .exec()
    .then(artists => {
      res.json(artists);
    })
    .catch(err => {
      console.log('Route error: '+err);
    });
}

function artistsOne(req, res) {
  Artist
    .findById(req.params.id)
    .exec()
    .then(artist => {
      res.render('artists/artist', {artist});
    })
    .catch(err => {
      console.log('Route error: '+err);
    });
}

module.exports = {
  show: artistsShow,
  showOne: artistsOne
};
