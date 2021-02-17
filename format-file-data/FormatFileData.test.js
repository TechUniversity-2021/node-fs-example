const formatFileData = require('./FormatFileData');

test('Should split text into array of individual words', () => {
  const result = formatFileData.splitIntoArray('Hello fella! \nI am groot. \n\nGood!');
  expect(result).toEqual(['Hello', 'fella!', 'I', 'am', 'groot.', 'Good!']);
});

test('Should return only filename without extension', () => {
  const result = formatFileData.returnOnlyFileName('abc.test.txt');
  expect(result).toBe('abc.test');
});
