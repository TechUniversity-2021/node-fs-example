const fs = require('fs');
const fileUtils = require('./FileUtils');

describe('read file', () => {
  it('should resolve with success value', () => {
    jest.spyOn(fs, 'readFile').mockImplementation((fileName, option, cb) => { cb(null, 'carrot\nbeans\npotato'); });
    expect(fileUtils.getData('abc.txt')).resolves.toStrictEqual(['carrot', 'beans', 'potato']);
  });

  it('should reject with error value', () => {
    jest.spyOn(fs, 'readFile').mockImplementation((filename, option, cb) => cb(new Error('error'), null));
    expect(fileUtils.getData('abc.txt')).rejects.toEqual(Error('error'));
  });
});

describe('read files in directory', () => {
  it('should read all the filename', () => {
    jest.spyOn(fs, 'readdir').mockImplementation((dirName, cb) => cb(null, 'success'));
    expect(fileUtils.getDirectoryFiles()).resolves.toBe('success');
  });

  it('should throw error if dir not found', () => {
    jest.spyOn(fs, 'readdir').mockImplementation((dirName, cb) => cb(Error('error')));
    expect(fileUtils.getDirectoryFiles()).rejects.toEqual(Error('error'));
  });
});
