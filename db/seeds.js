const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const rp = require('request-promise');

const env = require('../config/env');

const User = require('../models/user');
const Test = require('../models/test');

mongoose.connect(env.db);

User.collection.drop();
Test.collection.drop();

User
  .create([
    {
      username: 'Louis',
      email: 'louis@louis.com',
      password: 'password'
    },{
      username: 'Admin',
      email: 'admin@admin.com',
      password: 'password'
    }
  ])
  .then(users => {
    console.log(`${users.length} users created`);

    ///////// This is the JamBase api
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
        // Test
        //   .create([
        //     {
        //       band: 'Primus',
        //       events: jR['Events'][i]
        //     }
        //   ])
        //   .then(something => {
        //     // console.log(.length+' events created');
        //     console.log(something);
        //   });
      // });

    // This is ticketmaster
    const options = {
      uri: 'https://app.ticketmaster.com/discovery/v1/events.json?apikey=sJdyvBFWmrZySkRDzJ2v0wNi2qtLb7pn'
    };
    rp(options)
    .then(json => {
      console.log(json);
    })
    .catch(function (err) {
      console.log(err);
    });
  })
  .catch(err => {
    console.log(`Seeds error: ${err}`);
  })
  .finally(() => {
    mongoose.connection.close();
  });
