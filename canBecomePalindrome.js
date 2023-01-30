/* 
  Interview Question:
  Given a string
  return whether or not it's possible to make a palindrome out of the string's characters
  What is it about a string that makes it possible for it to be a palindrome?
  Determine whether or not it is possible for the string's characters to be
  rearranged into a palindrome.
  */

// racecar
// radar
// tacocat
// level
// kayak

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaaddddc";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

//                V
const str5 = "aadda";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;

/* 
  For a string to be able to be re-ordered into a palindrome
  It must have an even occurrence of every character
  Unless it is odd length, then it can have 1 character that
  can have an odd number of occurrences.
  Another way to look at it would be, if you cancel out ever char that has a pair,
  it can be a palindrome if you are left with 0 or 1 char remaining:
    - "dad" the "d" cancels with itself to leave "a"
    - "daad" the "d" and "a" cancel with itself to leave nothing
    - "daam" the "a" cancels with itself leaving "dm", more than 1 char remaining, can't be palindrome
*/

const canBecomePalindrome = (str) => {
    /*
    create an empty hashmap as a tracker: hashmap
    go through the chars in given string:
        if hasmap has the key [char]:
            remove the key value pair
        if the hashmap does not have the key [char]:
            create the key pair and set the value as 1;
    
    create a variable to track the odd# char: oddCount
    
    after the loop, create another loop go through the hashmap
        if hashmap[key] is not equals to 0; decrement the oddCount by 1;
    
    after the last loop, check if oddCount is greater than or equals to 0; return true if it is, return false if not
    */
    if( str.length < 1) return false;
    const hashmap = {};
    for ( let char of str){
        if(hashmap.hasOwnProperty(char)){
            delete hashmap[char]
        }
        else{
            hashmap[char] = 1; //dot notation can only be used in static data// no dynamic // expression is unknown during runtime, use [] when working with expression
        }
    }

    const oddCount = Object.keys(hashmap).length

    if(oddCount > 1){
        console.log(false)
        return false
    }
    console.log(true)
    return true;
}

const canBecomePalindrome2 = (str) => {
    const hashmap = {};
    let oddCount = 0;
    for ( let char of str){
        if(hashmap.hasOwnProperty(char)){
            delete hashmap[char]
            oddCount -= 1
        }
        else{
            hashmap[char] = 1;
            oddCount += 1
        }
    }
    if(oddCount > 1){
        console.log(false)
        return false;
    }
    console.log(true)
    return true
}

canBecomePalindrome(str1);
canBecomePalindrome(str2);
canBecomePalindrome(str3);
canBecomePalindrome(str4);
canBecomePalindrome(str6);


// console.log(canBecomePalindrome(str1) === expected1); // false
// console.log(canBecomePalindrome(str2) === expected2); // true
// console.log(canBecomePalindrome(str3) === expected3); // true
// console.log(canBecomePalindrome(str4) === expected4); // true
// console.log(canBecomePalindrome(str5) === expected5); // true