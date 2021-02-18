const fs = require('fs');
const readOp = require('./ReadDirandFile');

test('Unit test should return file names as array', () => {
  jest.spyOn(fs, 'readdir')
    .mockImplementation((file, cb) => {
      cb(null, 'read file names');
    });
  return expect(readOp.readDir('../seed/')).resolves.toEqual('read file names');
});

test('Unit test should reject filename read request', () => {
  jest.spyOn(fs, 'readdir')
    .mockImplementation((file, cb) => {
      cb('reject file', null);
    });
  return expect(readOp.readDir('../seed1/')).rejects.toEqual('reject file');
});

test('Unit testing should return files content', () => {
  jest
    .spyOn(fs, 'readFile')
    .mockImplementation((file, option, callback) => {
      callback(null, 'read File content');
    });
  return expect(readOp.readFileData('../seed/')).resolves.toBe('read File content');
});
test('Unit test should reject file data read request', () => {
  jest.spyOn(fs, 'readFile')
    .mockImplementation((file, option, cb) => {
      cb('reject read file content request', null);
    });
  return expect(readOp.readFileData('../seed1/')).rejects.toEqual('reject read file content request');
});
