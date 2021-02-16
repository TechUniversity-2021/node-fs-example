const splitIntoArray = (data) => {
  const splitData = data.split(/\s+/);
  return splitData.filter((word) => word !== '');
};

const returnOnlyFileName = (fileName) => fileName.split('.')[0];

module.exports = {
  splitIntoArray,
  returnOnlyFileName,
};
