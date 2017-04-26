const rp = require('request-promise');

function artistsOne(req, res) {
  const options = {
    uri: `https://app.ticketmaster.com/discovery/v2/attractions/${req.params.id}.json?apikey=sJdyvBFWmrZySkRDzJ2v0wNi2qtLb7pn`,
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  };
  rp(options)
    .then(artist => {
      return res.render('artists/artist', {artist});
    })
    .catch(err => {
      console.log('Route error: '+err);
    });
}

module.exports = {
  showOne: artistsOne
};
