const fs = require('fs');
const readFileDirectory = require('./PromisifyFileDirectory');

test('promise should resolve with directory data abc', () => {
  jest.spyOn(fs, 'readdir')
    .mockImplementation((path, callback) => {
      callback(null, 'abc');
    });
  return expect(readFileDirectory.readDir()).resolves.toBe('abc');
});

test('promise should resolve with file data abc', () => {
  jest.spyOn(fs, 'readFile')
    .mockImplementation((path, callback) => {
      callback(null, 'abc');
    });
  return expect(readFileDirectory.readDir()).resolves.toBe('abc');
});
