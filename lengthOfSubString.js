// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/* 
  Given a string, find the length of the longest substring without repeating characters.
*/
//                 👇
const str1 = "abcabcbb";
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.
//              v
const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

//                👀
const str3 = "pwwkew";
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */
//              v
const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"


function lengthOfLongestSubString(str) {
    /*
    create a temp variable for hashmap to keep track of appearance of each letter; : hashmap
    create another temp array to keep track of each substring: array
    create a temp variable to store individual substring that we are at: string
    loop through the string with char:
        if the hashmap has the key [char]:
            push the current string variable to the array
            reset string
            reset hashmap
            push the char to string
        else: 
            add the key value pair in the dictionary
            and push char into the string variable
    
    filter the array and return the longest substring
    */
    let hashmap = {}
    const array = []

    for ( let char of str){
        if(hashmap.hasOwnProperty(char)){
            array.push(hashmap[char]);
            for( let str in hashmap){
                hashmap[str]+=char;
            }
            hashmap[char] = char
        }
        else{
            for( let str in hashmap){
                hashmap[str]+=char;
            }
            hashmap[char] = char;
        }
    }
    const allSubstring = Object.values(hashmap)
    for ( let string of allSubstring){
        array.push(string)
    }
    console.log(hashmap)
    console.log(array)
    let sortedArray = array.sort(function(firstElement, secondElement) {     return secondElement.length - firstElement.length; })
    console.log(sortedArray[0])
    return sortedArray[0];
}

lengthOfLongestSubString(str1)
lengthOfLongestSubString(str2)
lengthOfLongestSubString(str3)
lengthOfLongestSubString(str4)


// ********second solution ************

// function lengthOfLongestSubString(str) {
//   // your code here
//   let subString = "";
//   let max = 0;
//   for (let i = 0; i < str.length; i++) {
//       subString += str[i];

//       for (let j = i + 1; j < str.length; j++) {
//           if (!subString.includes(str[j])) {
//               subString += str[j];
//           } else {
//               break;
//           }
//       }

//       max = Math.max(max, subString.length);
//       subString = ""
//   }

//   return max;
// }