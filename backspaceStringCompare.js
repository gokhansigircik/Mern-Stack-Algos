/* 
 ██╗ ██╗ 
████████╗
╚██╔═██╔╝
████████╗
╚██╔═██╔╝
 ╚═╝ ╚═╝ 
         
    Given two 🎻 strings S and T containing only lowercase letters and "#" characters,
    return if they are equal when both are typed into empty text editors.
    👉 '#' character means a 'backspace' character.
    i.e., after processing the backspaces, are the two strings equal?
    return true or false
    Ninja Bonus: solve in O(n) time
*/

// ad#clp
// aclp

//          v
const S1 = "ab#c";
// a -> ab -> a -> ac
//          v
const T1 = "ad#c";
// a -> ad -> a -> ac
const expected1 = true;
// Explanation: Both S and T become "ac"

//          v
const S2 = "ab##";
// ["a", "b"]
// "str1"
// a -> ab -> a -> ""

const T2 = "c#d#";
// []
// "str2"
// c -> "" -> d -> "" 
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
// a -> "" -> "" -> c
const T3 = "#a#c";
// "" -> a -> "" -> c
const expected3 = true;
// Explanation: Both S and T become "c"
const S5 = '####ac'
const T5 = 'ac####dsahkdlsda'
const S4 = "a#c";
// a -> "" -> c
const T4 = "b";
// b
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

function backspaceStringCompare(S, T) {
/*
first create two temp array variables each holds the new string; :newString1 newString2
    
if condition(length of T string is greater than S string):
    which string is longer, change the longer string to S ( using destructure swap)
loop through the strings ( loop until the end of S string)
    if char at S[index] || T[index] 
        newString1 || newString2 will remove the last element
    else{
        newString.push(S[index] || T[index])
    }
    if(newString1.length === newString2.length){
        newString1Concat = newString1.join('')
        newString2Concat = newString2.join('')
    }
    return false
*/

    const newString1 = [];
    const newString2 = [];
    let index = 0;
    if( T.length > S.length ){
        [T,S] = [S,T]
    }
    while( index < S.length){
        if(S[index] === '#'){
            newString1.pop();
        }
        else{
            newString1.push(S[index])
        }
        if(T[index] === '#'){
            newString2.pop();
        }
        else{
            newString2.push(T[index])
        }
        index++;
    }
    if(newString1.length === newString2.length){
        const newString1Concat = newString1.join('')
        const newString2Concat = newString2.join('')
        if(newString1Concat == newString2Concat){
            console.log(newString1Concat, newString2Concat);
            return true
        }
    }
    return false
}


//---------------------

// console.log(backspaceStringCompare(S1, T1))
// console.log(backspaceStringCompare(S2, T2))
// console.log(backspaceStringCompare(S3, T3))
// console.log(backspaceStringCompare(S4, T4))
console.log(
    backspaceStringCompare(S5, T5));