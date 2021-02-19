const fs = require("fs");
const { getFileData, getDirectoryFiles } = require("./PromisifiedFs");

test("read file should resolve with file content", (done) => {
  jest.spyOn(fs, "readFile").mockImplementation((file, option, cb) => {
    cb(null, "hello");
  });
  getFileData("dummy.txt").then((data) => {
    expect(data).toBe("hello");
    done();
  });
});

test("read file should reject with 'Error'", (done) => {
  jest.spyOn(fs, "readFile").mockImplementation((file, option, cb) => {
    cb(Error("Error"), null);
  });

  getFileData("dummy.txt").catch((err) => {
    //diff
    expect(err).toEqual(Error("Error"));
    done();
  });
});

test("read directory should resolve with files", (done) => {
  jest.spyOn(fs, "readdir").mockImplementation((dir, option, callback) => {
    callback(null, ["file.txt"]);
  });
  getDirectoryFiles("dummydir").then((data) => {
    expect(data).toEqual(["file.txt"]);
    done();
  });
});

// Used rejects instead of then
test("promisified read directory should reject with 'Error'", (done) => {
  jest.spyOn(fs, "readdir").mockImplementation((dir, option, cb) => {
    cb(Error("Error"), null);
  });
  expect(getDirectoryFiles("dummyDir")).rejects.toEqual(Error("Error"));
  done();
});