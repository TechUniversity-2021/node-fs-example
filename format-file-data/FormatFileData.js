const splitIntoArray = (data, startingChar) => {
  const splitData = data.split(/\s+/);
  if (startingChar) {
    return splitData.filter((word) => word !== '' && word.toLowerCase().startsWith(startingChar.toLowerCase()));
  }
  return splitData.filter((word) => word !== '');
};

module.exports = {
  splitIntoArray,
};
