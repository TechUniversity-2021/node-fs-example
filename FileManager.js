const dataReader = require('./dataOperators/dataReader');
const dataAppender = require('./dataOperators/dataAppender');
const dataDeleter = require('./dataOperators/dataDeleter');

class FileManager {
  constructor(action, fileName, prefix, items) {
    this.action = action;
    this.fileName = fileName;
    this.prefix = prefix;
    this.items = items;
  }

  async run() {
    switch (this.action) {
      case 'read': {
        const data = await dataReader.readAllFiles(this.prefix);
        console.log(data);
        break;
      }
      case 'append':
        await dataAppender.appendDataToFile(this.fileName, this.items);
        break;
      case 'delete':
        await dataDeleter.deleteDataFromFile(this.fileName, this.prefix);
        break;
      default:
        console.log('for help run `node index.js -h`');
        break;
    }
  }
}

module.exports = { FileManager };
