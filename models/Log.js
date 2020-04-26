const mongoose = require('mongoose');

const LogSchema = mongoose.Schema({
  tech: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'teches',
  },
  message: {
    type: String,
    required: true,
  },
  attention: {
    type: Boolean,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('log', LogSchema);
