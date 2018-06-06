import { Bible } from '../../../graphe/models/bibleSchema';

test('bible should be invalid if name is empty', () => {
  const bible = new Bible({ description: 'good', capacity: 1 });
  const validation = bible.validateSync();
  expect(validation.errors.name.kind).toEqual('required');
});
