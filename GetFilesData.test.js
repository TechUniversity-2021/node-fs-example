const fs = require('fs');
const path = require('path');
const { getAllFilesData } = require('./GetFilesData');
const promisifyFs = require('./Read');

test('printAllFiles should return text of all files as array inside object ', (done) => {
  const dirSpy = jest.spyOn(promisifyFs, 'readDir');
  dirSpy.mockResolvedValueOnce(['a.txt', 'b.txt', 'c.txt']);
  const fileSpy = jest.spyOn(promisifyFs, 'fread');
  fileSpy.mockResolvedValueOnce('1\n2\n3')
    .mockResolvedValueOnce('4\n5\n6')
    .mockResolvedValueOnce('7\n8\n9');
  const result = {
    'a.txt': ['1', '2', '3'],
    'b.txt': ['4', '5', '6'],
    'c.txt': ['7', '8', '9'],
  };
  getAllFilesData(path.join(__dirname, 'seed')).then((data) => {
    expect(data).toEqual(result);
    done();
  });
});
