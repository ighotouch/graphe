const mongoose = require('mongoose');

const bibleSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export const Bible = mongoose.model('Bible', bibleSchema);
