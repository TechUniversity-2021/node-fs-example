const { type } = require('os');
const readFileByFile1 = require('./ReadDirectoryFiles');
// eslint-disable-next-line import/no-unresolved
const fileOps = require('../utils/PromisifyFileRead');
// eslint-disable-next-line import/no-unresolved
const dirOps = require('../utils/PromisifyDirectoryRead');

test('Should display the content in the formatted form', async () => {
  const readDirSpy = jest.spyOn(dirOps, 'promisifyDirectory');
  readDirSpy
    .mockResolvedValueOnce(['dummyFile.txt']);
  const readFileSpy = jest.spyOn(fileOps, 'promisifyFs');
  readFileSpy
    .mockResolvedValueOnce('abc\n xyz');
  const result = await readFileByFile1.readFileByFile();
  expect(readFileSpy).toHaveBeenCalledWith('../seed/dummyFile.txt');

  expect(typeof (result[0]['dummyFile.txt'])).toBe(typeof (['abc', ' xyz']));
});
