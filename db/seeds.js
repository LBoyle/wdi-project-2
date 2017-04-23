const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const rp = require('request-promise');

const env = require('../config/env');

const User = require('../models/user');
const Test = require('../models/test');
const Venue = require('../models/venue');
const Artist = require('../models/artist');
const Event = require('../models/event');

mongoose.connect(env.db);

User.collection.drop();
Test.collection.drop();
Venue.collection.drop();
Artist.collection.drop();
Event.collection.drop();

User
  .create([
    {
      name: 'Louis',
      email: 'louis@louis.com',
      password: 'password',
      passwordConf: 'password',
      favEvents: [],
      favVenues: [],
      favArtists: []
    },{
      name: 'Admin',
      email: 'admin@admin.com',
      password: 'password',
      passwordConf: 'password',
      favEvents: [],
      favVenues: [],
      favArtists: []
    }
  ])
  .then(users => {
    console.log(`${users.length} users created`);

    //////////////////// This is JamBase - artistId 3346 is Primus
    // const options = {
    //   uri: 'http://api.jambase.com/events?artistId=3346&page=0&api_key=vked2v3ab566xrzn5tvy27g6'
    // };
    // return rp(options)
    //   .then(json => {
    //     const jR = JSON.parse(json)['Events'];
    //     for (var i = 0; i < jR.length; i++) {
    //       Test
    //         .create({
    //           band: 'Primus',
    //           events: jR[i].Venue.Name
    //         })
    //         .then(something => {
    //           // console.log(.length+' events created');
    //           console.log(something);
    //         });
    //     }
    //     Test
    //       .create([
    //         {
    //           band: 'Primus',
    //           events: jR['Events'][i]
    //         }
    //       ])
    //       .then(something => {
    //         // console.log(.length+' events created');
    //         console.log(something);
    //       });
    //   });

    ///////////////// This is ticketmaster - data is wierd
    // const options = {
    //   uri: 'https://app.ticketmaster.com/discovery/v1/events.json?apikey=sJdyvBFWmrZySkRDzJ2v0wNi2qtLb7pn'
    // };
    // rp(options)
    // .then(json => {
    //   console.log(json);
    // })
    // .catch(function (err) {
    //   console.log(err);
    // });

    // this is seeding Venues
    return Venue.create([
      {
        name: 'Roundhouse',
        description: 'The Roundhouse is a hub of inspiration where artists and emerging talent create extraordinary work and where young people can grow creatively as individuals. We believe in the power of creativity to change lives.',
        capacity: 1700,
        futureEvents: [],
        pastEvents: [],
        location: 'Camden, London',
        lat: 51.5434,
        lng: 0.1518,
        images: [
          'https://media-cdn.tripadvisor.com/media/photo-s/01/f2/a3/6d/roundhouse-exterior.jpg',
          'http://www.bloglmn.com/wp-content/uploads/Flaming-Lips-live-at-the-Roundhouse_-credit-Stuart-Leech.jpg'
        ]
      },{
        name: 'Roundhouse',
        description: 'The Roundhouse is a hub of inspiration where artists and emerging talent create extraordinary work and where young people can grow creatively as individuals. We believe in the power of creativity to change lives.',
        capacity: 1700,
        futureEvents: [],
        pastEvents: [],
        location: 'Camden, London',
        lat: 51.5434,
        lng: 0.1518,
        images: [
          'https://media-cdn.tripadvisor.com/media/photo-s/01/f2/a3/6d/roundhouse-exterior.jpg',
          'http://www.bloglmn.com/wp-content/uploads/Flaming-Lips-live-at-the-Roundhouse_-credit-Stuart-Leech.jpg'
        ]
      },{
        name: 'Roundhouse',
        description: 'The Roundhouse is a hub of inspiration where artists and emerging talent create extraordinary work and where young people can grow creatively as individuals. We believe in the power of creativity to change lives.',
        capacity: 1700,
        futureEvents: [],
        pastEvents: [],
        location: 'Camden, London',
        lat: 51.5434,
        lng: 0.1518,
        images: [
          'https://media-cdn.tripadvisor.com/media/photo-s/01/f2/a3/6d/roundhouse-exterior.jpg',
          'http://www.bloglmn.com/wp-content/uploads/Flaming-Lips-live-at-the-Roundhouse_-credit-Stuart-Leech.jpg'
        ]
      }
    ]);
  })
  .then(venues => {
    console.log(`${venues.length} venues created`);

    return Artist.create([
      {
        name: 'Primus',
        description: 'Hillbilly thrash funk',
        images: [
          'http://cps-static.rovicorp.com/3/JPG_400/MI0003/534/MI0003534144.jpg?partner=allrovi.com',
          'http://img2.bdbphotos.com/images/orig/l/i/li4eoq9empjamejo.jpg?djet1p5k'
        ],
        members: [
          {
            name: 'Les Claypool',
            description: 'Fishing mad',
            age: 53,
            instrument: 'Bass, Vocals',
            images: [
              'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/LesClaypool.jpg/220px-LesClaypool.jpg',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Claypool_to_wiki.jpg/230px-Claypool_to_wiki.jpg'
            ]
          },{
            name: 'Les Claypool',
            description: 'Fishing mad',
            age: 53,
            instrument: 'Bass, Vocals',
            images: [
              'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/LesClaypool.jpg/220px-LesClaypool.jpg',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Claypool_to_wiki.jpg/230px-Claypool_to_wiki.jpg'
            ]
          },{
            name: 'Les Claypool',
            description: 'Fishing mad',
            age: 53,
            instrument: 'Bass, Vocals',
            images: [
              'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/LesClaypool.jpg/220px-LesClaypool.jpg',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Claypool_to_wiki.jpg/230px-Claypool_to_wiki.jpg'
            ]
          }
        ],
        albums: [
          {
            name: 'Sailing The Seas Of Cheese',
            description: 'A trip on a boat',
            dateReleased: '1991, 5, 14',
            tracks: [
              'Seas of Cheese',
              'Here Come the Bastards',
              'Sgt. Baker',
              'American Life',
              'Jerry Was a Race Car Driver',
              'Eleven',
              'Is It Luck?',
              'Grandad\'s Little Ditty',
              'Tommy the Cat',
              'Sathington Waltz',
              'Those Damned Blue-Collar Tweekers',
              'Fish On (Fisherman Chronicles, Chapter II)',
              'Los Bastardos'
            ],
            images: ['https://upload.wikimedia.org/wikipedia/en/thumb/7/77/1991_Sailing_the_Seas_of_Cheese.jpg/220px-1991_Sailing_the_Seas_of_Cheese.jpg']
          },{
            name: 'Sailing The Seas Of Cheese',
            description: 'A trip on a boat',
            dateReleased: '1991, 5, 14',
            tracks: [
              'Seas of Cheese',
              'Here Come the Bastards',
              'Sgt. Baker',
              'American Life',
              'Jerry Was a Race Car Driver',
              'Eleven',
              'Is It Luck?',
              'Grandad\'s Little Ditty',
              'Tommy the Cat',
              'Sathington Waltz',
              'Those Damned Blue-Collar Tweekers',
              'Fish On (Fisherman Chronicles, Chapter II)',
              'Los Bastardos'
            ],
            images: ['https://upload.wikimedia.org/wikipedia/en/thumb/7/77/1991_Sailing_the_Seas_of_Cheese.jpg/220px-1991_Sailing_the_Seas_of_Cheese.jpg']
          },{
            name: 'Sailing The Seas Of Cheese',
            description: 'A trip on a boat',
            dateReleased: '1991, 5, 14',
            tracks: [
              'Seas of Cheese',
              'Here Come the Bastards',
              'Sgt. Baker',
              'American Life',
              'Jerry Was a Race Car Driver',
              'Eleven',
              'Is It Luck?',
              'Grandad\'s Little Ditty',
              'Tommy the Cat',
              'Sathington Waltz',
              'Those Damned Blue-Collar Tweekers',
              'Fish On (Fisherman Chronicles, Chapter II)',
              'Los Bastardos'
            ],
            images: ['https://upload.wikimedia.org/wikipedia/en/thumb/7/77/1991_Sailing_the_Seas_of_Cheese.jpg/220px-1991_Sailing_the_Seas_of_Cheese.jpg']
          }
        ],
        futureEvents: [],
        pastEvents: []
      },{
        name: 'Primus',
        description: 'Hillbilly thrash funk',
        images: [
          'http://cps-static.rovicorp.com/3/JPG_400/MI0003/534/MI0003534144.jpg?partner=allrovi.com',
          'http://img2.bdbphotos.com/images/orig/l/i/li4eoq9empjamejo.jpg?djet1p5k'
        ],
        members: [
          {
            name: 'Les Claypool',
            description: 'Fishing mad',
            age: 53,
            instrument: 'Bass, Vocals',
            images: [
              'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/LesClaypool.jpg/220px-LesClaypool.jpg',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Claypool_to_wiki.jpg/230px-Claypool_to_wiki.jpg'
            ]
          },{
            name: 'Les Claypool',
            description: 'Fishing mad',
            age: 53,
            instrument: 'Bass, Vocals',
            images: [
              'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/LesClaypool.jpg/220px-LesClaypool.jpg',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Claypool_to_wiki.jpg/230px-Claypool_to_wiki.jpg'
            ]
          },{
            name: 'Les Claypool',
            description: 'Fishing mad',
            age: 53,
            instrument: 'Bass, Vocals',
            images: [
              'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/LesClaypool.jpg/220px-LesClaypool.jpg',
              'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Claypool_to_wiki.jpg/230px-Claypool_to_wiki.jpg'
            ]
          }
        ],
        albums: [
          {
            name: 'Sailing The Seas Of Cheese',
            description: 'A trip on a boat',
            dateReleased: '1991, 5, 14',
            tracks: [
              'Seas of Cheese',
              'Here Come the Bastards',
              'Sgt. Baker',
              'American Life',
              'Jerry Was a Race Car Driver',
              'Eleven',
              'Is It Luck?',
              'Grandad\'s Little Ditty',
              'Tommy the Cat',
              'Sathington Waltz',
              'Those Damned Blue-Collar Tweekers',
              'Fish On (Fisherman Chronicles, Chapter II)',
              'Los Bastardos'
            ],
            images: ['https://upload.wikimedia.org/wikipedia/en/thumb/7/77/1991_Sailing_the_Seas_of_Cheese.jpg/220px-1991_Sailing_the_Seas_of_Cheese.jpg']
          },{
            name: 'Sailing The Seas Of Cheese',
            description: 'A trip on a boat',
            dateReleased: '1991, 5, 14',
            tracks: [
              'Seas of Cheese',
              'Here Come the Bastards',
              'Sgt. Baker',
              'American Life',
              'Jerry Was a Race Car Driver',
              'Eleven',
              'Is It Luck?',
              'Grandad\'s Little Ditty',
              'Tommy the Cat',
              'Sathington Waltz',
              'Those Damned Blue-Collar Tweekers',
              'Fish On (Fisherman Chronicles, Chapter II)',
              'Los Bastardos'
            ],
            images: ['https://upload.wikimedia.org/wikipedia/en/thumb/7/77/1991_Sailing_the_Seas_of_Cheese.jpg/220px-1991_Sailing_the_Seas_of_Cheese.jpg']
          },{
            name: 'Sailing The Seas Of Cheese',
            description: 'A trip on a boat',
            dateReleased: '1991, 5, 14',
            tracks: [
              'Seas of Cheese',
              'Here Come the Bastards',
              'Sgt. Baker',
              'American Life',
              'Jerry Was a Race Car Driver',
              'Eleven',
              'Is It Luck?',
              'Grandad\'s Little Ditty',
              'Tommy the Cat',
              'Sathington Waltz',
              'Those Damned Blue-Collar Tweekers',
              'Fish On (Fisherman Chronicles, Chapter II)',
              'Los Bastardos'
            ],
            images: ['https://upload.wikimedia.org/wikipedia/en/thumb/7/77/1991_Sailing_the_Seas_of_Cheese.jpg/220px-1991_Sailing_the_Seas_of_Cheese.jpg']
          }
        ],
        futureEvents: [],
        pastEvents: []
      }
    ]);
  })
  .then(artists => {
    console.log(`${artists.length} artists created`);

    return Event.create([
      {
        name: 'Some event',
        description: 'Some description',
        startTime: Date.now(),
        endTime: Date.now(),
        location: 'Camden, London',
        // venue: {type: mongoose.Schema.ObjectId, ref: 'Venue'},
        // artists: [{type: mongoose.Schema.ObjectId, ref: 'Artist'}],
        images: [
          'http://www.fillmurray.com/460/300',
          'http://www.fillmurray.com/460/300'
        ]
      }
    ]);
  })
  .then(events => {
    console.log(`${events.length} events created`);
  })
  .catch(err => {
    console.log(`Seeds error: ${err}`);
  })
  .finally(() => {
    mongoose.connection.close();
  });
