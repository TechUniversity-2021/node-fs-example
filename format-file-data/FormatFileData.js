const splitIntoArray = (data) => {
  const splitData = data.split(/\s+/);
  return splitData.filter((word) => word !== '');
};

const returnOnlyFileName = (fileName) => fileName.split('.').slice(0, -1).join('.');

module.exports = {
  splitIntoArray,
  returnOnlyFileName,
};
