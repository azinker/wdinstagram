// Entry model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EntrySchema = new mongoose.Schema({
  author: String,
  photo_url: String,
  date_taken: String,
});

var Entry = mongoose.model('Entry', EntrySchema);
module.exports = Entry;
