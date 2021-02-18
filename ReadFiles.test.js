const fs = require('fs');
const seqFileRead = require('./ReadFiles.js');
const promiseRead = require('./AsyncRead.js');

test('Sequence should resolve  ', async () => {
  const readSpy = jest.spyOn(promiseRead, 'readData');
  const readDirSpy = jest.spyOn(promiseRead, 'readDir');
  readDirSpy.mockResolvedValueOnce(['abc']);
  readSpy.mockResolvedValueOnce('def\nxyz');

  const obj= await seqFileRead.getData('./anydir')
  expect(readDirSpy).toHaveBeenCalledWith('./anydir');
   expect(readSpy).toHaveBeenCalledWith(`./anydir/abc`)
  // expect(readSpy).toHaveBeenNthCalledWith(2, `./seed/${abc[1]}`);
  // expect(readSpy).toHaveBeenNthCalledWith(3, `./seed/${abc[0]}`);
  // expect(data).toBe('xyz');
  
});
