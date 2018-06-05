const mongoose = require('mongoose');
const config = require('../config/database');

const bibleSchema = mongoose.Schema({
  name: String,
});

const Bible = mongoose.model('Bible', bibleSchema);

const bible = new Bible({ name: 'Genesis' });