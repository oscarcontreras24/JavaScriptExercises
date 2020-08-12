const repeatString = function(str, num) {
  totalStr = "";
  if (num < 0) {
    return "ERROR";
  }
  for (let i = 0; i < num; i++) {
    totalStr += str;
  }
  return totalStr;
}

module.exports = repeatString
