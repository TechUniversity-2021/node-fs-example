const dataAppender = require('../dataAppender');
const dataReader = require('../dataReader');
const utils = require('../../utils/fileUtils');

describe('dataAppender function', () => {
  it('should return object with new append contents of each file in an array', async () => {
    const mockFileItems = ['this is a file', 'I am happy'];
    const mockFileNames = 'spices.txt';
    const consoleSpy = jest.spyOn(console, 'log');
    jest.spyOn(utils, 'appendFileSync').mockReturnValue();
    const mockResult = {
      spices: mockFileItems,
    };
    jest.spyOn(dataReader, 'readAllFiles').mockReturnValue(mockResult);
    await dataAppender.appendDataToFile(mockFileNames, mockFileItems);
    return expect(consoleSpy).toHaveBeenCalledWith(mockResult);
  });
});
