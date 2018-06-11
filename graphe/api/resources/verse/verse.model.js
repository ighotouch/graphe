const mongoose = require('mongoose');

const verseSchema = mongoose.Schema({
  verse: {
    type: Number,
    required: [true, 'Verse must have a number'],
  },
  chapter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapter',
    required: true,
  },
  text: {
    type: String,
    required: [true, 'A verse must have a text'],
  },
  references: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'verse',
    },
  ],
  tags: [
    {
      type: String,
    },
  ],
  comment: {
    type: String,
  },
});

export const Verse = mongoose.model('Verse', verseSchema);

export default Verse;
