const chalk = require('chalk');
const yargs = require('yargs');
const { FileManager } = require('./FileManager');

const { argv } = yargs
  .option(chalk.green('method'), {
    alias: chalk.green('m'),
    description: chalk.magenta('Name of Data Operator\n') + chalk.green("Example: -m 'append' or --method 'append'\n"),
    choices: ['read', 'append', 'delete'],
    type: 'string',
  })
  .option(chalk.green('filename'), {
    alias: chalk.green('f'),
    description: chalk.magenta('FileName on which data operator should be performed. This field is for `delete` and `append` method\n') + chalk.green('Example: -f beverages.txt\n'),
    type: 'string',
  })
  .option(chalk.green('prefix'), {
    alias: chalk.green('p'),
    description: chalk.magenta('Possible arguements\nFor Method `read/delete` - string prefix to filter data\n') + chalk.green('Example: -p a\n'),
    type: 'string',
  })
  .option(chalk.green('items'), {
    alias: chalk.green('i'),
    description: chalk.magenta('Item Array to append data to a file\nFor Method `append` - to append items to a particular file\n') + chalk.green("Example: -i apple -i mango which is equal  to  -i ['apple','mango']"),
    type: 'array',
  })
  .help()
  .alias('help', 'h');

const fileManager = new FileManager(argv.m, argv.f, argv.p, argv.i);
fileManager.run();
