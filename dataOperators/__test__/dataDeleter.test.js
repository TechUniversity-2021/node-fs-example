const utils = require('../../utils/fileUtils');
const dataDeleter = require('../dataDeleter');
const dataReader = require('../dataReader');

describe('dataDeleter function', () => {
  it('should go to writeFileStream function when there is content left after delete', async () => {
    const mockFileName = 'spices.txt';
    const mockFileContent = 'chilli\nturmeric\npepper\ncardamom\nsalt\n';
    const mockFilterPrefix = 'c';
    const mockResult = {
      spices: ['turmeric', 'pepper', 'salt'],
    };
    const consoleSpy = jest.spyOn(console, 'log');

    jest.spyOn(utils, 'readFile').mockReturnValue(mockFileContent);

    jest.spyOn(utils, 'writeFileStream').mockReturnValue();

    jest.spyOn(dataReader, 'readAllFiles').mockReturnValue(mockResult);
    await dataDeleter.deleteDataFromFile(mockFileName, mockFilterPrefix);
    return expect(consoleSpy).toHaveBeenCalledWith(mockResult);
  });

  it('should go to truncateFile function when there is no content left after delete', async () => {
    const mockFileName = 'spices.txt';
    const mockFileContent = 'chilli\ncardamom\n';
    const mockFilterPrefix = 'c';
    const mockResult = {};
    const consoleSpy = jest.spyOn(console, 'log');

    jest.spyOn(utils, 'readFile').mockReturnValue(mockFileContent);
    jest.spyOn(utils, 'truncateFile').mockReturnValue();

    jest.spyOn(dataReader, 'readAllFiles').mockReturnValue(mockResult);
    await dataDeleter.deleteDataFromFile(mockFileName, mockFilterPrefix);
    return expect(consoleSpy).toHaveBeenCalledWith(mockResult);
  });

  it('should console error when file path is incorrect', async () => {
    const mockFileName = 'spices.txt';
    const mockFilterPrefix = 'c';
    const mockErrorMessage = 'incorrect path';
    const consoleSpy = jest.spyOn(console, 'log');

    jest.spyOn(utils, 'readFile').mockImplementation(() => { throw new Error(mockErrorMessage); });
    await dataDeleter.deleteDataFromFile(mockFileName, mockFilterPrefix);
    return expect(consoleSpy).toHaveBeenCalledWith(mockErrorMessage);
  });
});
