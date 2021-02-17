const fs = require('fs');
const fileOPs = require('./AsyncRead.js');

test('Unit testing ', (done) => {
  jest.spyOn(fs, 'readFile')
    .mockImplementation((file, option, cb) => cb(null, 'nmo'));
  fileOPs.readData('anyfile').then((data) => {
    expect('nmo').toBe(data);
    done();
  });
});

test('unit file rfail', (done) => {
  jest.spyOn(fs, 'readFile')
    .mockImplementation((file, option, cb) => cb(new Error('reject'), null));

  expect(fileOPs.readData('anyfile')).rejects.toEqual(Error('reject'));
  done();
});

test('Unit testing ', (done) => {
  jest.spyOn(fs, 'readdir')
    .mockImplementation((file, option, cb) => cb(null, 'nmo'));
  fileOPs.readDir('anydir').then((data) => {
    expect('nmo').toBe(data);
    done();
  });
});

test('unit file rfail', (done) => {
  jest.spyOn(fs, 'readdir')
    .mockImplementation((file, option, cb) => cb(new Error('reject'), null));

  expect(fileOPs.readDir('anydir')).rejects.toEqual(Error('reject'));
  done();
});
