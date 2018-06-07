import { Verse } from '../../../graphe/api/resources/verse/verse.model';

test('chapter should be invalid if number or book is empty', () => {
  const verse = new Verse({ description: 'test' });
  const validation = verse.validateSync();
  expect(validation.errors.number.kind).toEqual('required');
  expect(validation.errors.book.kind).toEqual('required');
});
