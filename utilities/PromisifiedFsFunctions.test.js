const fs = require('fs');
const { promisifyReadFile, promisifyReadDir } = require('./PromisifiedFsFunctions');

test('Unit testing for promisified fs.readFile resolved', (done) => {
  jest
    .spyOn(fs, 'readFile')
    .mockImplementation((file, option, callback) => {
      callback(null, '21,34,43,57,"Anukriti"');
    });
  promisifyReadFile('randomFile').then((text) => {
    expect(text).toBe('21,34,43,57,"Anukriti"');
    done();
  });
});

test('Unit testing for promisified fs.readFile resolved using .resolves', () => {
  jest
    .spyOn(fs, 'readFile')
    .mockImplementation((file, option, callback) => {
      callback(null, '21,34,43,57,"Anukriti"');
    });
  return expect(promisifyReadFile('randomFile')).resolves.toBe(
    '21,34,43,57,"Anukriti"',
  );
});

test('Unit testing for promisified fs.readFile rejected', () => {
  jest
    .spyOn(fs, 'readFile')
    .mockImplementation((file, option, callback) => {
      callback(new Error('An error occured'), null);
    });
  return expect(promisifyReadFile('randomFile')).rejects.toEqual(
    new Error('An error occured'),
  );
});

test('Unit test for promisified fs.readdir resolved', () => {
  jest
    .spyOn(fs, 'readdir')
    .mockImplementation((directory, option, callback) => {
      callback(null, ['beverages.txt', 'fruits.txt', 'vegetables.txt']);
    });
  return expect(promisifyReadDir('randomDir')).resolves.toEqual(
    ['beverages.txt', 'fruits.txt', 'vegetables.txt'],
  );
});

test('Unit test for promisified fs.readdir rejected', () => {
  jest
    .spyOn(fs, 'readdir')
    .mockImplementation((directory, option, callback) => {
      callback(new Error('Directory not found!'), null);
    });
  return expect(promisifyReadDir('randomDir')).rejects.toEqual(
    new Error('Directory not found!'),
  );
});
