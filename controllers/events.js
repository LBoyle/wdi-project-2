const rp = require('request-promise');

function eventsOne(req, res) {
  const options = {
    uri: `https://app.ticketmaster.com/discovery/v2/events/${req.params.id}.json?apikey=sJdyvBFWmrZySkRDzJ2v0wNi2qtLb7pn`,
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  };
  rp(options)
    .then(event => {
      console.log(event);
      return res.render('events/event', {event});
    })
    .catch(err => {
      console.log('Route error: '+err);
    });
}

module.exports = {
  showOne: eventsOne
};
