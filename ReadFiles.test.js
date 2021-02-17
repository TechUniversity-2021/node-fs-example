const fs = require('fs');
const seqFileRead = require('./ReadFiles.js');
const promiseRead = require('./AsyncRead.js');

test("Sequence should resolve with 'abc,def,ghi,xyx' ", (done) => {
  const readSpy = jest.spyOn(promiseRead, 'readData');
  readSpy.mockResolvedValueOnce('abc')
    .mockResolvedValueOnce('def')
    .mockResolvedValueOnce('ghi')
    .mockResolvedValueOnce('xyz');

  seqFileRead.getData().then((data) => {
    expect(readSpy).toHaveBeenCalledWith(1, `./seed/${abc[0]}`);
    expect(readSpy).toHaveBeenCalledWith(1, `./seed/${abc[1]}`);
    expect(readSpy).toHaveBeenCalledWith(1, `./seed/${abc[0]}`);
    expect(data).toBe('xyz');
    done();
  });
});
