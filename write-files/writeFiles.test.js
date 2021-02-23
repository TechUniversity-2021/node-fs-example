/* eslint-disable no-unused-vars */
const solution = require('./writeFiles');
const fsFunctions = require('../utilities/PromisifiedFsFunctions');
const formatFunctions = require('../format-file-data/FormatFileData');

describe('writeFiles function', () => {
  it('should return object with key as filename and value as array of content', async () => {
    const spyOnReadFile = jest.spyOn(fsFunctions, 'readFile');
    const spyOnAppendFile = jest.spyOn(fsFunctions, 'appendFile');

    spyOnReadFile.mockResolvedValue('hi\nhello\ngood\nmorning\n');
    spyOnAppendFile.mockResolvedValue('Success');
    const result = await solution.writeFiles('MOCK_DIRECTORY/MOCK_FILE.txt', ['good', 'morning']);
    expect(spyOnAppendFile).toHaveBeenCalledWith('MOCK_DIRECTORY/MOCK_FILE.txt', 'good\nmorning\n');
    expect(spyOnReadFile).toHaveBeenCalledWith('MOCK_DIRECTORY/MOCK_FILE.txt');
    expect(result).toEqual({
      MOCK_FILE: ['hi', 'hello', 'good', 'morning'],
    });
  });
  it('should throw an error object when error occurs during reading any of the files', async () => {
    const spyOnReadFile = jest.spyOn(fsFunctions, 'readFile');
    const spyOnAppendFile = jest.spyOn(fsFunctions, 'appendFile');
    const spyOnsplitIntoArray = jest.spyOn(formatFunctions, 'splitIntoArray');
    const MOCK_REJECTED_ERROR = new Error('Error');
    spyOnReadFile.mockRejectedValue(MOCK_REJECTED_ERROR);
    spyOnsplitIntoArray.mockImplementation((data) => ['hi', 'hello']);
    try {
      const result = await solution.writeFiles('MOCK_FILE.txt');
    } catch (error) {
      expect(error.message).toBe('Problem accessing files');
    }
  });
});
