const mongoose = require('mongoose');

const bibleSchema = mongoose.Schema({
  translation: {
    type: String,
    required: true,
  },
  version: {
    type: String,
    required: true,
    unique: true,
  },
  books: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
    },
  ],
  description: {
    type: String,
  },
});

export const Bible = mongoose.model('Bible', bibleSchema);

export default Bible;
