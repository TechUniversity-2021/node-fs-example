const splitByStartChar = (data, startingChar) => {
  const splitData = data.split('\n');
  return splitData.filter((word) => word !== '' && word.toLowerCase().startsWith(startingChar.toLowerCase()));
};

module.exports = {
  splitByStartChar,
};
