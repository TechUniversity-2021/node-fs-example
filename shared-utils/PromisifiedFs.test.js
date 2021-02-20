const fs = require('fs');
const { getFileData, getDirectoryFiles } = require('./promisifiedFs');

test('read file should resolve with file content', (done) => {
  jest.spyOn(fs, 'readFile').mockImplementation((file, option, cb) => {
    cb(null, 'hello');
  });
  getFileData('dummy.txt').then((data) => {
    expect(data).toBe('hello');
    done();
  });
});

test('unit testing for promisified readFile with .resolves', () => {
  jest.spyOn(fs, 'readFile').mockResolvedValue('RandomString');
  expect(getFileData('dummy.txt')).resolves.toBe('RandomString');
});

test('Unit testing for promisified readFile rejects', () => {
  jest
    .spyOn(fs, 'readFile')
    .mockImplementation((file, option, callback) => {
      callback(new Error('Error!'), null);
    });
  return expect(getFileData('dummyfile.txt')).rejects.toEqual(
    new Error('Error!'),
  );
});

test('read directory should resolve with files', (done) => {
  jest.spyOn(fs, 'readdir').mockImplementation((dir, option, callback) => {
    callback(null, ['firstFile.txt', 'secondFile.txt']);
  });
  getDirectoryFiles('dummydir').then((data) => {
    expect(data).toEqual(['firstFile.txt', 'secondFile.txt']);
    done();
  });
});

test('unit testing for promisified readdir with .resolves', () => {
  jest.spyOn(fs, 'readdir').mockResolvedValue(['firstFile.txt', 'secondFile.txt']);
  expect(getDirectoryFiles('dummydir')).resolves.toEqual(['firstFile.txt', 'secondFile.txt']);
});

test('Unit testing for promisified readdir rejects', () => {
  jest
    .spyOn(fs, 'readdir')
    .mockImplementation((file, option, callback) => {
      callback(new Error('Error!'), null);
    });
  return expect(getDirectoryFiles('dummydir')).rejects.toEqual(
    new Error('Error!'),
  );
});
