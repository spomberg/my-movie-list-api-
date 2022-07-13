const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const listSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: false,
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  movies: [{ type: Number }],
});

// add plugin that converts mongoose to json
listSchema.plugin(toJSON);

/**
 * @typedef List
 */
const List = mongoose.model('List', listSchema);

module.exports = List;
