/* eslint-disable no-unused-vars */
const solution = require('./ReadFiles');
const fsFunctions = require('../utilities/PromisifiedFsFunctions');
const formatFunctions = require('../format-file-data/FormatFileData');

describe('readFiles function', () => {
  it('should return object with key as filename and value as array of content', async () => {
    const spyOnReadFile = jest.spyOn(fsFunctions, 'readFile');
    const spyOnReadDir = jest.spyOn(fsFunctions, 'readDir');
    const spyOnSplitIntoArray = jest.spyOn(formatFunctions, 'splitIntoArray');

    spyOnReadDir.mockResolvedValue(['MOCK_FILE.txt']);
    spyOnReadFile.mockResolvedValue('hi \nhello');
    spyOnSplitIntoArray.mockImplementation((data) => ['hi', 'hello']);

    const result = await solution.readFiles('MOCK_DIRECTORY');

    expect(spyOnReadDir).toHaveBeenCalledWith('MOCK_DIRECTORY');
    expect(spyOnReadFile).toHaveBeenCalledWith('MOCK_DIRECTORY/MOCK_FILE.txt');
    expect(spyOnSplitIntoArray).toHaveBeenCalledWith('hi \nhello');

    expect(result).toEqual({
      MOCK_FILE: ['hi', 'hello'],
    });
  });
  it('should throw an error object when error occurs during reading directory', async () => {
    const spyOnReadFile = jest.spyOn(fsFunctions, 'readFile');
    const spyOnReadDir = jest.spyOn(fsFunctions, 'readDir');
    const spyOnsplitIntoArray = jest.spyOn(formatFunctions, 'splitIntoArray');
    const MOCK_REJECTED_ERROR = new Error('Error');
    spyOnReadDir.mockRejectedValue(MOCK_REJECTED_ERROR);
    spyOnReadFile.mockResolvedValue('hi \nhello');
    spyOnsplitIntoArray.mockImplementation((data) => ['hi', 'hello']);
    try {
      const result = await solution.readFiles('MOCK_DIRECTORY');
    } catch (error) {
      expect(error.message).toBe('Problem accessing files');
    }
  });
  it('should throw an error object when error occurs during reading any of the files', async () => {
    const spyOnReadFile = jest.spyOn(fsFunctions, 'readFile');
    const spyOnReadDir = jest.spyOn(fsFunctions, 'readDir');
    const spyOnsplitIntoArray = jest.spyOn(formatFunctions, 'splitIntoArray');
    const MOCK_REJECTED_ERROR = new Error('Error');
    spyOnReadDir.mockResolvedValue(['MOCK_FILE.txt']);
    spyOnReadFile.mockRejectedValue(MOCK_REJECTED_ERROR);
    spyOnsplitIntoArray.mockImplementation((data) => ['hi', 'hello']);
    try {
      const result = await solution.readFiles('MOCK_DIRECTORY');
    } catch (error) {
      expect(error.message).toBe('Problem accessing files');
    }
  });
  it('should return object with key as filename and value as array of words starting with only the provided letter', async () => {
    const spyOnReadFile = jest.spyOn(fsFunctions, 'readFile');
    const spyOnReadDir = jest.spyOn(fsFunctions, 'readDir');
    const spyOnSplitIntoArray = jest.spyOn(formatFunctions, 'splitIntoArray');

    spyOnReadDir.mockResolvedValue(['MOCK_FILE.txt']);
    spyOnReadFile.mockResolvedValue('hi \nhello\ngood');
    spyOnSplitIntoArray.mockImplementation((data) => ['hi', 'hello']);

    const result = await solution.readFiles('MOCK_DIRECTORY', 'h');

    expect(spyOnReadDir).toHaveBeenCalledWith('MOCK_DIRECTORY');
    expect(spyOnReadFile).toHaveBeenCalledWith('MOCK_DIRECTORY/MOCK_FILE.txt');
    expect(spyOnSplitIntoArray).toHaveBeenCalledWith('hi \nhello');

    expect(result).toEqual({
      MOCK_FILE: ['hi', 'hello'],
    });
  });
});
