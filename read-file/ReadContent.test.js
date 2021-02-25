const readContent = require('./ReadContent');
const fileUtils = require('../file-utils/FileUtils');

describe('read content and make object', () => {
  const resultValue = {
    abc: 'abc',
  };
  it('object with key as filenames and value as array of content', async () => {
    jest.spyOn(fileUtils, 'getDirectoryFiles').mockResolvedValue(['abc.txt']);
    jest.spyOn(fileUtils, 'getData').mockResolvedValue('abc');

    const result = await readContent.getData('xyz');
    expect(result).toStrictEqual(resultValue);
  });
});
