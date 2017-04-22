const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  content: {type: String}
});

module.exports = mongoose.model('Test', testSchema);
