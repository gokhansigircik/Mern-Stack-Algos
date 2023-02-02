// https://leetcode.com/problems/compare-version-numbers/

/* 
Given two strings, version1, and version2, both representing version numbers
If version1 > version2 return 1; if version1 < version2 return -1; otherwise return 0.

Helpful methods:
  - .split(characterToSplitOn)
    - returns an array of items: "a-b-c".split("-") returns ["a", "b", "c"]
  - .parseInt
    - given a string, converts it to and returns int or NaN (Not a Number) if conversion fails

Bonus, solve without .split
*/

const test1V1 = "0.1";
const test1V2 = "1.1";
const expected1 = -1;

const test2V1 = "1.0.1";
const test2V2 = "1";
const expected2 = 1;

const test3V1 = "7.5.2.4";
const test3V2 = "7.5.3";
const expected3 = -1;

const test4V1 = "7.5.2.4";
const test4V2 = "7.5.2";
const expected4 = 1;

const test5V1 = "1.01";
const test5V2 = "1.001";
const expected5 = 0;
// Explanation: Ignoring leading zeroes, both “01” and “001" represent the same number “1”

const test6V1 = "1.0.1";
const test6V2 = "1";
const expected6 = 1;

/**
 * Determines which version number is greater or if they are equal.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} v1
 * @param {string} v2
 * @returns {number} 1 if v1 greater, -1 if v1 smaller, 0 if equal.
 */

function compareVersionNumbers(v1, v2) {
  const v1Arr = v1.split(".");
  const v2Arr = v2.split(".");
  const len = Math.max(v1Arr.length, v2Arr.length);

  for (let i = 0; i < len; i++) {
    const v1Num = i < v1Arr.length ? parseInt(v1Arr[i]) : 0;
    const v2Num = i < v2Arr.length ? parseInt(v2Arr[i]) : 0;
    if (v1Num > v2Num) return 1;
    if (v1Num < v2Num) return -1;
  }
  return 0;
}

console.log(compareVersionNumbers(test1V1, test1V2));
console.log(compareVersionNumbers(test2V1, test2V2));
console.log(compareVersionNumbers(test3V1, test3V2));
console.log(compareVersionNumbers(test4V1, test4V2));
console.log(compareVersionNumbers(test5V1, test5V2));
console.log(compareVersionNumbers(test6V1, test6V2));

// *******************solution************
// function compareVersionNumbers(v1, v2) {
//   const v1Reduced = v1.split('.').join("").split("0").join("")
//   const v2Reduced = v2.split('.').join("").split("0").join("")
  
//   if(v1Reduced > v2Reduced){
//       return 1
//   }else if(v1Reduced < v2Reduced) {
//       return -1
//   }else{
//       return 0
//   }

// }


// ****************3rd sol****************
// function compareVersionNumbers(v1, v2) {
//   const v1Arr = v1.split('.');
//   const v2Arr = v2.split('.');
//   let length = Math.max(v1.length, v2.length);

//   for (let i = 0; i < length; i++) {
//       if ((parseInt(v1Arr[i],10) || 0) > (parseInt(v2Arr[i],10) || 0)) {
//           return 1;
//       }

//       if ((parseInt(v1Arr[i],10) || 0) < (parseInt(v2Arr[i],10) || 0)){
//           return -1;
//       }
//   }
//   return 0;
// }