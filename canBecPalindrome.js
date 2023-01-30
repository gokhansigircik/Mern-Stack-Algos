/* 
  Given to me (Neil) in an interview

  Given a string return whether or not it's possible to make
  a palindrome out of the string's characters.

  What is it about a string that makes it possible for it to become a
  palindrome?
*/

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;

/**
 * Determines whether or not it is possible for the string's characters to be
 * rearranged into a palindrome.
 * - Space: O(?).
 * - Time: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str can be rearranged into a palindrome.
 */

  function canStringBecomePalindrome(str) {
    // create a "frequency table"
    // that tracks even or odd occurrences
    // for each char. you can only have
    // one char that's odd
    if(str === "") {
        return false
    }
    let map = {}

    for (let i = 0; i < str.length; i++) {
        if (map[str[i]]) {
            map[str[i]]++
        } else {
            map[str[i]] = 1
        }
    }

    let count = 0
    for (let key of Object.keys(map)) {

        if (map[key] % 2 != 0) {
            count++
        }
    }
    if (count > 1) {
        return false
    }

    return true
}

console.log(canStringBecomePalindrome(str1))
console.log(canStringBecomePalindrome(str2))
console.log(canStringBecomePalindrome(str3))
console.log(canStringBecomePalindrome(str4))
console.log(canStringBecomePalindrome(str5))
console.log(canStringBecomePalindrome(str6))
