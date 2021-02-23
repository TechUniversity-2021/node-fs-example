const splitIntoArray = (data, startingChar) => {
  const splitData = data.split('\n');
  if (startingChar) {
    return splitData.filter((word) => word !== '' && word.toLowerCase().startsWith(startingChar.toLowerCase()));
  }
  return splitData.filter((word) => word !== '');
};

module.exports = {
  splitIntoArray,
};
