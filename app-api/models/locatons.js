const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title:String,
  content:String
});

mongoose.model('new', newsSchema);
