const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const env = require('../config/env');

const User = require('../models/user');

mongoose.connect(env.db);

User.collection.drop();

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
  })
  .catch(err => {
    console.log(`Seeds error: ${err}`);
  })
  .finally(() => {
    mongoose.connection.close();
  });
