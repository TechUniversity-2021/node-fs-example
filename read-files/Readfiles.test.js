const solution = require('./ReadFiles');
const fsFunctions = require('../utilities/PromisifiedFsFunctions');
const formatFunctions = require('../format-file-data/FormatFileData');

test('Should return object with key as filename and value as array of content', async () => {
  const spyOnReadFile = jest.spyOn(fsFunctions, 'promisifyReadFile');
  const spyOnReadDir = jest.spyOn(fsFunctions, 'promisifyReadDir');
  const spyOnsplitIntoArray = jest.spyOn(formatFunctions, 'splitIntoArray');
  const spyOnFileName = jest.spyOn(formatFunctions, 'returnOnlyFileName');

  spyOnReadDir.mockResolvedValue(['RandomFiles.txt']);
  spyOnReadFile.mockResolvedValue('hi \nhello');
  spyOnsplitIntoArray.mockImplementation((data) => ['hi', 'hello']);
  spyOnFileName.mockImplementation((fileName) => 'RandomFiles');

  const result = await solution.readFiles('dummy directory');

  expect(spyOnReadDir).toHaveBeenCalledWith('dummy directory');
  expect(spyOnReadFile).toHaveBeenCalledWith('dummy directory/RandomFiles.txt');
  expect(spyOnFileName).toHaveBeenCalledWith('RandomFiles.txt');
  expect(spyOnsplitIntoArray).toHaveBeenCalledWith('hi \nhello');

  expect(result).toEqual({
    RandomFiles: ['hi', 'hello'],
  });
});
