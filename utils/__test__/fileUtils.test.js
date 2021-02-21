const fs = require('fs');
const { PassThrough } = require('stream');
const utils = require('../fileUtils');

describe('appendFileSync function', () => {
  it("should resolve with value 'finish'", () => {
    jest.spyOn(fs, 'appendFileSync')
      .mockImplementation((path, data, callback) => {
        callback(null);
      });
    return expect(utils.appendFileSync()).resolves.toBe('finish');
  });

  it("should reject with error message 'error' ", () => {
    jest.spyOn(fs, 'appendFileSync')
      .mockImplementation((path, data, callback) => {
        callback(Error('error'));
      });
    return expect(utils.appendFileSync()).rejects.toEqual(Error('error'));
  });
});

describe('readFile function', () => {
  it("should resolve with value 'this is async'", () => {
    jest.spyOn(fs, 'readFile')
      .mockImplementation((path, options, callback) => {
        callback(null, 'this is async');
      });
    return expect(utils.readFile()).resolves.toBe('this is async');
  });

  it("should reject with error message 'error' ", () => {
    jest.spyOn(fs, 'readFile')
      .mockImplementation((path, options, callback) => {
        callback(new Error('error'), null);
      });
    return expect(utils.readFile()).rejects.toEqual(Error('error'));
  });
});

describe('truncateFile function', () => {
  it("should resolve with value 'finish'", () => {
    jest.spyOn(fs, 'truncate')
      .mockImplementation((path, options, callback) => {
        callback(null);
      });
    return expect(utils.truncateFile()).resolves.toBe('finish');
  });

  it("should reject with error message 'error' ", () => {
    jest.spyOn(fs, 'truncate')
      .mockImplementation((path, options, callback) => {
        callback(Error('error'));
      });
    return expect(utils.truncateFile()).rejects.toEqual(Error('error'));
  });
});

describe('writeFileStream function', () => {
  it('should resolve with value "finish" when data is there ', () => {
    const mockWriteable = new PassThrough();
    const mockFilePath = '/seed/file.txt';
    jest.spyOn(fs, 'createWriteStream').mockReturnValue(mockWriteable);
    return expect(utils.writeFileStream(mockFilePath, ['a', 'b', 'c'])).resolves.toBe('finish');
  });

  it('should resolve with value "finish" when data is undefined ', () => {
    const mockWriteable = new PassThrough();
    const mockFilePath = '/seed/file.txt';
    jest.spyOn(fs, 'createWriteStream').mockReturnValue(mockWriteable);
    return expect(utils.writeFileStream(mockFilePath, undefined)).resolves.toBe('finish');
  });

  // it('should reject with error', async () => {
  //   const mockWriteable = new PassThrough();
  //   const mockFilePath = '/seed/file.txt';
  //   const mockError = new Error('You crossed the streams!');
  //   jest.spyOn(fs, 'createWriteStream').mockReturnValue(mockWriteable);
  //   const promise = utils.writeFileStream(mockFilePath, ['a', 'b', 'c']);
  //   setTimeout(() => {
  //     mockWriteable.emit('error', mockError);
  //   }, 1);
  //   await expect(promise).rejects.toEqual(Error('error'));
  // });
});

describe('readDir  function', () => {
  it("should resolve with value 'reading Dir'  ", (done) => {
    const readDirSpy = jest.spyOn(fs, 'readdir');
    readDirSpy.mockImplementation((path, callback) => {
      callback(null, 'reading Dir');
    });
    expect(utils.readDir()).resolves.toBe('reading Dir');
    readDirSpy.mockClear();
    done();
  });

  it("should reject with value 'error'  ", (done) => {
    const readDirSpy = jest.spyOn(fs, 'readdir');
    readDirSpy.mockImplementation((path, callback) => {
      callback(new Error('error'), null);
    });
    expect(utils.readDir()).rejects.toEqual(Error('error'));
    readDirSpy.mockClear();
    done();
  });
});
