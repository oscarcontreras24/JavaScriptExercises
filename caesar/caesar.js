/*
  This function has several other functions inside that will do the Caesar
  ciher as long as a string is given as input as well as an integer offset
*/

const caesar = function(...args) {
  let str = args[0];
  let offset = args[1];
  let modStr = [];
  let message = '';

  /*
  Input: String
  Output: int array

  This function takes in a string that converts each character in the string to
  an integer and then places those values into an array
  */
  function makeIntArr(str1) {
    let intArr = [];
    for (let i = 0; i < str1.length; i++) {
      intArr[i] = str1.charCodeAt(i);
      //console.log(intArr[i]);
    }
    return intArr;
  }

  /*
  Input: int array, int
  Output: none

  As a side effect, this function modifies the integer array created in the
  makeIntArr by adding an offset inputed by the user. This updates the values in
  the array to account for the offset.
  */
  function modIntArr(arr, num) {
    for (let i = 0; i < arr.length; i++) {
      /* need to split lower and upper case letters
      if (str[i].charCodeAt() <= 122 && str[i].charCodeAt() >= 65) {
        arr[i] += num;
      }
      */

      // Text Wrapping

      // Deals with offsetting capital letters

      // accounts for capital offsets and wraps around the character range
      if (arr[i] <= 90 && arr[i] >= 65) {
        arr[i] += num; // offset array value
        console.log(arr[i]);

        if (arr[i] > 90) {
          numWrap = arr[i] % 90; // sets how muh the offset will be
          // makes sure to wrap around characters in the alphabet only
          while (numWrap > 26) {
            numWrap -= 26;
            //console.log(numWrap);
          }
          arr[i] = 65 + numWrap - 1;
          //if (arr[i] % 90 <= 26) {
            //arr[i] = 65 + (arr[i] % 90) - 1;
          //}
        }

        if (arr[i] < 65) {
          arr[i] = 90 - (65 % arr[i]) + 1;
        }
      }

      // accounts for capital offsets and wraps around the character range
      else if (arr[i] >= 97 && arr[i] <= 122) {
        arr[i] += num;

        if (arr[i] > 122) {
          numWrap = arr[i] % 122;
          while (numWrap > 26) {
            numWrap -= 26;
            //console.log(numWrap);
          }
          arr[i] = 97 + numWrap - 1;
          //if (arr[i] % 90 <= 26) {
            //arr[i] = 65 + (arr[i] % 90) - 1;
          //}
        }

        if (arr[i] < 97) {
          arr[i] = 122 - (97 % arr[i]) + 1;
        }
      }
    }
  }

  /*
  Input: int array
  Output: string

  This function takes in integer array and concatenates each of the integer
  values chracter value together
  */
  function arrToStr(arr) {
    let str1 = '';
    for (let i = 0; i < arr.length; i++) {
      str1 += String.fromCharCode(arr[i]);
    }
    //console.log(str1);
    return str1;
  }

  modStr = makeIntArr(str);
  modIntArr(modStr, offset);
  message = arrToStr(modStr);
  return message;
}

module.exports = caesar
