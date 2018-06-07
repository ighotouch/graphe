const mongoose = require('mongoose');

const chapterSchema = mongoose.Schema({
  number: {
    type: Number,
    required: [true, 'Chapter must have a number'],
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'book',
    required: true,
  },
  verses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'verse',
    },
  ],
  description: {
    type: String,
  },
});

export const Chapter = mongoose.model('Chapter', chapterSchema);

export default Chapter;
