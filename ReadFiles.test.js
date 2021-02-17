const fs = require('fs');
const seqFileRead = require('./ReadFiles.js');
const promiseRead = require('./AsyncRead.js');

test("Sequence should resolve with 'abc,def,ghi,xyx' ", (done) => {
  const readSpy = jest.spyOn(promiseRead, 'readData');
  const readDirSpy = jest.spyOn(promiseRead, 'readDir');
  readDirSpy.mockResolvedValueOnce(['abc']);
  readSpy.mockResolvedValueOnce('def')
    .mockResolvedValueOnce('ghi')
    .mockResolvedValueOnce('xyz');

  seqFileRead.getData().then((data) => {
    expect(readSpy).toHaveBeenNthCalledWith(1, `./seed/${abc[0]}`);
    expect(readSpy).toHaveBeenNthCalledWith(1, `./seed/${abc[1]}`);
    expect(readSpy).toHaveBeenNthCalledWith(1, `./seed/${abc[0]}`);
    expect(data).toBe('xyz');
    done();
  });
});
