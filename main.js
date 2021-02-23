const { readFiles } = require('./read-files/ReadFiles');
const { writeFiles } = require('./write-files/writeFiles');

const mainScript = async () => {
  console.log(await readFiles('./seed'), '\n');
  console.log(await readFiles('./seed', 'c'), '\n');
  console.log(await writeFiles('./seed/beverages.txt', ['tea', 'hot chocolate', 'coffee']), '\n');
  console.log(await writeFiles('./seed/fruits.txt', ['strawberry', 'peach']), '\n');
  console.log(await writeFiles('./seed/vegetables.txt', ['pumpkin']), '\n');
};

(async () => {
  await mainScript();
})();
