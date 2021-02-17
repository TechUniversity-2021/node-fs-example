const readFile = require("./ReadFile")
const promisifyfs = require('../promisify-contents/PromisifyFileDirectory')



test('file read with contents', (done) => {
    const readFileSpy = jest.spyOn(promisifyfs, 'readFile');
    jest.spyOn(promisifyfs, 'readDir')
        .mockImplementation(function (path) {
            return ["abc.txt"]
        })
    readFileSpy.mockResolvedValueOnce('abc')
    readFile.fileWithContents().then(function(data) {
        expect(readFileSpy).toHaveBeenNthCalledWith(1, "../seed/abc.txt")
        expect(data).toStrictEqual({ 'abc': 'abc' })
        done()
   })
})




