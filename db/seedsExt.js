const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const rp = require('request-promise');

const env = require('../config/env');

const Venue = require('../models/venue');
const Artist = require('../models/artist');
const Event = require('../models/event');

// mongoose.connect(env.db);

// Test.collection.drop();
// Venue.collection.drop();
// Artist.collection.drop();
// Event.collection.drop();

function getArtists() {
  mongoose.connect(env.db);
  Artist.collection.drop();
  const options = {
    uri: 'http://app.ticketmaster.com/discovery/v2/attractions/?apikey=sJdyvBFWmrZySkRDzJ2v0wNi2qtLb7pn&locale=en-us',
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  }; // event
  rp(options)
    .then(artistJson => {
      // console.log(artistJson._embedded.attractions[0].classifications[0].segment.name);
      return artistJson._embedded.attractions.map(artist => {
        if (artist.classifications[0].segment.name !== 'Sports') {
          return artist;
        }
      }).filter(artist => {
        return artist !== undefined;
      });
    })
    .then(artists => {
      return Artist.create(artists);
      // create documents here
    })
    .then(artists => {
      console.log(artists.length+' artists created');
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      mongoose.connection.close();
    });
}

function getEvents() {
  mongoose.connect(env.db);
  Event.collection.drop();
  const options = {
    uri: 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=sJdyvBFWmrZySkRDzJ2v0wNi2qtLb7pn&marketId=201',
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  }; // event
  rp(options)
    .then(eventJson => {
      return eventJson._embedded.events.map(event => {
        if (event.name !== 'DEMO EVENT') {
          // console.log(event._links);
          return event;
        }
      }).filter(event => {
        return event !== undefined;
      });
    })
    .then(events => {
      return Event.create(events);
      // create documents here
    })
    .then(events => {
      console.log(events.length+' events created');
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      mongoose.connection.close();
    });
}

function getVenues() {
  mongoose.connect(env.db);
  Venue.collection.drop();
  const options = {
    uri: 'https://app.ticketmaster.com/discovery/v2/venues.json?apikey=sJdyvBFWmrZySkRDzJ2v0wNi2qtLb7pn&countryCode=GB',
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  };
  rp(options)
    .then(venueJson => {
      return venueJson._embedded.venues.map(venue => {
        if (venue.name !== 'DEMO ORGANISATION') {
          return venue;
        }
      }).filter(venue => {
        return venue !== undefined;
      });
    })
    .then(venues => {
      return Venue.create(venues);
      // create documents here
    })
    .then(venues => {
      console.log(venues.length+' venues created');
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      mongoose.connection.close();
    });
}

getVenues();
// getEvents();
// getArtists();
console.log('End of file');
