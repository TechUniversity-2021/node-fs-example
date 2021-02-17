const readFileDirectory = require("./PromisifyFileDirectory")
const fs = require('fs');

test("promise should resolve with directory data abc", () => {
    jest.spyOn(fs, 'readdir')
        .mockImplementation(function (path, callback) {
            callback(null, "abc")
        })
    return expect(readFileDirectory.readDir()).resolves.toBe("abc")
})



test("promise should resolve with file data abc", () => {
    jest.spyOn(fs, 'readFile')
        .mockImplementation(function (path, callback) {
            callback(null, "abc")
        })
    return expect(readFileDirectory.readDir()).resolves.toBe("abc")
})


