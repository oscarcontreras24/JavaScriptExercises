const palindromes = function(...args) {
  let str = args[0].toLowerCase();
  let cleanStr = '';
  let revStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt() <= 122 && str[i].charCodeAt() >= 65) {
      cleanStr += str[i];
    }
  }
  console.log(cleanStr);
  for (let i = cleanStr.length - 1; i >= 0; i--) {
    //console.log(str[i]);
    //if (str[i].charCodeAt() <= 122 && str[i].charCodeAt() >= 65) {
      revStr += cleanStr[i];
    //}
  }
  console.log(revStr);
  for (let i = 0; i < cleanStr.length; i++) {
    //if (str[i].charCodeAt() <= 122 && str[i].charCodeAt() >= 65) {
      //console.log(i);
      //console.log(str[i]);
      //console.log(revStr[i]);
      if (cleanStr[i] == revStr[i]) {
        //console.log(str[i])
        continue;
      }
      else {
        return false;
      }
    //}
  }
  return true;
}

module.exports = palindromes
