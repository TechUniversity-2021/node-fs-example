const dataReader = require('../dataReader');
const utils = require('../../utils/fileUtils');

describe('dataReader function', () => {
  it('should return object with contents of each file in an array', async () => {
    const mockFileContent = 'this is a file\nI am happy';
    const mockFileNames = ['spices.txt', 'fruits.txt'];
    const mockResult = {
      'spices.txt': ['this is a file', 'I am happy'],
      'fruits.txt': ['this is a file', 'I am happy'],
    };

    jest.spyOn(utils, 'readDir').mockReturnValue(mockFileNames);
    jest.spyOn(utils, 'readFile').mockReturnValue(mockFileContent);

    const data = await dataReader.readAllFiles();
    return expect(data).toEqual(mockResult);
  });

  it('should return object with contents of each file(only that starts with prefix "a") in an array', async () => {
    const mockFileContent = 'app\nsap\njap\ncap\nart\ncart';
    const mockFileNames = ['spices.txt', 'fruits.txt'];
    const mockFilterPrefix = 'a';
    const mockResult = {
      'spices.txt': ['app', 'art'],
      'fruits.txt': ['app', 'art'],
    };

    jest.spyOn(utils, 'readDir').mockReturnValue(mockFileNames);

    jest.spyOn(utils, 'readFile').mockReturnValue(mockFileContent);

    const data = await dataReader.readAllFiles(mockFilterPrefix);
    return expect(data).toEqual(mockResult);
  });

  it('should run empty object when directory does not exist', async () => {
    jest.spyOn(utils, 'readDir').mockImplementation(() => { throw new Error('error'); });
    const data = await dataReader.readAllFiles();
    return expect(data).toEqual({});
  });
});
