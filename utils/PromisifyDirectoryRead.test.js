const fs = require('fs');
const dirOps = require('./PromisifyDirectoryRead');

test('Should return array of files', async () => {
  jest
    .spyOn(fs, 'readdir')
    .mockImplementation((dirArray, option, callback) => {
      callback(null, ['Meghana.txt']);
    });
  const text = await dirOps.promisifyDirectory('\randomFile');
  expect(text).toContain('Meghana.txt');
});

test('Unit testing for rejected', () => {
  jest
    .spyOn(fs, 'readdir')
    .mockImplementation((dirArray, option, callback) => {
      callback(new Error('No directory found'), null);
    });
  return expect(dirOps.promisifyDirectory('\randomFile')).rejects.toEqual(new Error('No directory found'));
});
