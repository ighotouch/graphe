const mongoose = require('mongoose');

export const verseSchema = mongoose.Schema({
  number: {
    type: Number,
    required: [true, 'Verse must have a number'],
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
