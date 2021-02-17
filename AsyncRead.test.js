const fs = require('fs');
const fileOPs = require('./AsyncRead.js');

test('Test for readFile for reolved promise with nmo', (done) => {
  jest.spyOn(fs, 'readFile')
    .mockImplementation((file, option, cb) => cb(null, 'nmo'));
  fileOPs.readData('anyfile').then((data) => {
    expect('nmo').toBe(data);
    done();
  });
});

test('Test for readFile for rejected promise with reject', (done) => {
  jest.spyOn(fs, 'readFile')
    .mockImplementation((file, option, cb) => cb(new Error('reject'), null));

  expect(fileOPs.readData('anyfile')).rejects.toEqual(Error('reject'));
  done();
});

test('UTest for readDir for reolved promise with nmo', (done) => {
  jest.spyOn(fs, 'readdir')
    .mockImplementation((file, option, cb) => cb(null, 'nmo'));
  fileOPs.readDir('anydir').then((data) => {
    expect('nmo').toBe(data);
    done();
  });
});

test('Test for readDir for rejected promise with reject', (done) => {
  jest.spyOn(fs, 'readdir')
    .mockImplementation((file, option, cb) => cb(new Error('reject'), null));

  expect(fileOPs.readDir('anydir')).rejects.toEqual(Error('reject'));
  done();
});
