const Event = require('../models/event');

function eventsShow(req, res) {
  Event
    .find()
    .exec()
    .then(events => {
      res.json(events);
    })
    .catch(err => {
      console.log('Route error: '+err);
    });
}

function eventsOne(req, res) {
  Event
    .findById(req.params.id)
    .exec()
    .then(event => {
      res.render('events/event', {event});
    })
    .catch(err => {
      console.log('Route error: '+err);
    });
}

module.exports = {
  show: eventsShow,
  showOne: eventsOne
};
