const fs = require('fs');
const promisifyFs = require('./Read');

test("fread should resolve with value 'this is async'", () => {
  jest.spyOn(fs, 'readFile')
    .mockImplementation((path, options, callback) => {
      callback(null, 'this is async');
    });
  return expect(promisifyFs.fread()).resolves.toBe('this is async');
});

test("fread should reject with error message 'error' ", () => {
  jest.spyOn(fs, 'readFile')
    .mockImplementation((path, options, callback) => {
      callback(new Error('error'), null);
    });
  return expect(promisifyFs.fread()).rejects.toEqual(Error('error'));
});

test('readDir should return array of files names of size 3 inside seed folder ', (done) => {
  promisifyFs.readDir('./seed').then((data) => {
    expect(data.length).toBe(3);
    done();
  });
});

test("readDir should resolve with value 'reading Dir'  ", (done) => {
  const readDirSpy = jest.spyOn(fs, 'readdir');
  readDirSpy.mockImplementation((path, callback) => {
    callback(null, 'reading Dir');
  });
  expect(promisifyFs.readDir()).resolves.toBe('reading Dir');
  readDirSpy.mockClear();
  done();
});

test("readDir should reject with value 'error'  ", (done) => {
  const readDirSpy = jest.spyOn(fs, 'readdir');
  readDirSpy.mockImplementation((path, callback) => {
    callback(new Error('error'), null);
  });
  expect(promisifyFs.readDir()).rejects.toEqual(Error('error'));
  readDirSpy.mockClear();
  done();
});
