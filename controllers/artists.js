// const Artist = require('../models/artist');
const rp = require('request-promise');

// function artistsShow(req, res) {
//   Artist
//     .find()
//     .exec()
//     .then(artists => {
//       res.json(artists);
//     })
//     .catch(err => {
//       console.log('Route error: '+err);
//     });
// }

function artistsOne(req, res) {
  // Artist
  //   .findById(req.params.id)
  //   .exec()
  //   .then(artist => {
  //     res.render('artists/artist', {artist});
  //   })
  //   .catch(err => {
  //     console.log('Route error: '+err);
  //   });
  const options = {
    uri: `https://app.ticketmaster.com/discovery/v2/attractions/${req.params.id}.json?apikey=sJdyvBFWmrZySkRDzJ2v0wNi2qtLb7pn`,
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  }; // event
  rp(options)
    .then(artist => {
      console.log(artist);
      return res.render('artists/artist', {artist});
    })
    .catch(err => {
      console.log('Route error: '+err);
    });
}

module.exports = {
  // show: artistsShow,
  showOne: artistsOne
};
