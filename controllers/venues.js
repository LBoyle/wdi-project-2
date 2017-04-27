const rp = require('request-promise');

function venuesOne(req, res) {
  const options = {
    uri: `https://app.ticketmaster.com/discovery/v2/venues/${req.params.id}.json?apikey=sJdyvBFWmrZySkRDzJ2v0wNi2qtLb7pn`,
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  };
  rp(options)
    .then(venue => {
      console.log(venue);
      return res.render('venues/venue', {venue});
    })
    .catch(err => {
      console.log('Route error: '+err);
      res.render('statics/error', {error: err});
    });
}

module.exports = {
  showOne: venuesOne
};
