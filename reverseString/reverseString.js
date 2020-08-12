const reverseString = function(str) {
  strArray = [];
  newStr = "";
  for (let i = 0; i < str.length; i++) {
    strArray.push(str[i]);
  }
  for (let i = strArray.length - 1; i >= 0; i--) {
    newStr += strArray[i];
  }
  return newStr;
}

module.exports = reverseString
