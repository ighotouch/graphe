import { Chapter } from '../../../graphe/api/resources/chapter/chapter.model';

test('chapter should be invalid if number or book is empty', () => {
  const chapter = new Chapter({ description: 'test' });
  const validation = chapter.validateSync();
  expect(validation.errors.number.kind).toEqual('required');
  expect(validation.errors.book.kind).toEqual('required');
});
