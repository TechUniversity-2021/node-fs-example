const {readAfile,readDirectory} = require('./FileUtils')
const fs = require("fs");

// test("promise should resolve with file content", () => {
//       return expect(readAfile('./seed/fruits.txt')).resolves.toBe("mango\nbanana\norange\napple");
//     })

// test("promise should resolve with directory content", () => {
//     // return expect(readDirectory('./seed')).resolves.toBe(expect.arrayContaining(["beverages.txt", "fruits.txt", "vegetables.txt"]));
//     return expect(readDirectory('./seed')).resolves.toEqual(["beverages.txt", "fruits.txt", "vegetables.txt"]);
// })

//mock implementation - coz fs.readFile is also a predetermined function
test('unit testing read file',(done)=>{
    jest.spyOn(fs,'readFile').mockImplementation((file,option,cb)=>cb(null,'hello world'))
    readAfile('./seed/fruits.txt').then(data =>  {
      expect('hello world').toBe(data)
      done()
    })
  })

  test('unit testing read a directory',(done)=>{
    jest.spyOn(fs,'readdir').mockImplementation((file,option,cb)=>cb(null,'hello world'))
    readDirectory('./seed').then(data =>  {
      expect('hello world').toBe(data)
      done()
    })
  })

