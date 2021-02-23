const formatFileData = require('./FormatFileData');

describe('splitIntoArray function', () => {
  it('should split text into array of individual words', () => {
    const result = formatFileData.splitIntoArray('Hello fella!\nI am groot.\n\nGood!');
    expect(result).toEqual(['Hello fella!', 'I am groot.', 'Good!']);
  });
  it('should split text into array of individual words and return words starting with a particular letter', () => {
    const result = formatFileData.splitIntoArray('Hello fella!\nI am groot.\n\nGood!', 'g');
    expect(result).toEqual(['Good!']);
  });
});
