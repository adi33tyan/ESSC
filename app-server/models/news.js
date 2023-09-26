const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: String,
  publishedOn: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('News', newsSchema);
