import { Verse } from '../../../graphe/api/resources/verse/verse.model';

test('verse should be invalid if verse or chapter is empty', () => {
  const verse = new Verse({ description: 'test' });
  const validation = verse.validateSync();
  expect(validation.errors.verse.kind).toEqual('required');
  expect(validation.errors.chapter.kind).toEqual('required');
});
