// Requires:
const mongoose = require('mongoose');

// Schema definition:
const logSchema = new mongoose.Schema({
  hash: {
    type: String,
    required: 'log schema requires hash for new log',
    trim: true,
    index: true
  },
  text: {
    type: String,
    trim: true,
    required: 'log schema requires something to be logged'
  },
  time: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Log', logSchema);