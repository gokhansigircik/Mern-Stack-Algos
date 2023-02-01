/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/
    Given to a Coding Dojo alumni by Riot Games.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/
//                         v
const str1 = "b70 a164 c32 a20 c10";
const expected1 = "a184 b70 c42";
// isNaN
// parseInt()
// someObj.hasOwnProperty("key")

function rehash(str){
    /*
    first we will pre-populate a hashmap with all the letters as keys and 0 as starting value;
    one temp variable to indicate the char key we are at : charIndex
    one temp variable to hold the numeric value as string: num
    loop through the string:
        if the index is a letter;
            add(parseInt) the previous added numbers(num) into it's value and reset the num to '';
            and put it in a place holder variable(charIndex), 
        if the index is a number;     
            add to the num
    after the loop, 
    loop through the hashmap:
        remove all the keys with value of 0;
    After the loop, use built in methods: Object.entries and .join() to concat the object into an string
    and lastly .replaceAll to remove all the ','
    */ 
    let hashmap = {a:0,b:0,c:0,d:0,e:0,f:0}
    let num = '0';
    // console.log(result[charIndex])
    let charIndex = str[0];
    for( let char of str){
        if(isNaN(char)){
            hashmap[charIndex] += parseInt(num);
            num='';
            charIndex = char;
        }
        else{
            num+= char
        };
    }
    hashmap[charIndex] += parseInt(num);
    for( let key in hashmap){
        if(hashmap[key]===0){
            delete hashmap[key];
        }
    }
    let result = Object.entries(hashmap).join(' ').replaceAll(',','')
    console.log(result)
    return result;
}


// try using a empty object and not an prepopulated one
const rehash2 = (str) =>{
    let hashmap = {};
    let num = ''
    let charIndex = str[0];
    for ( let char of str){
        if(isNaN(char)){
            if(hashmap.hasOwnProperty(char)){
                hashmap[charIndex] += parseInt(num)
                num='';
                charIndex = char;
            }
            else{
                hashmap[char] = 0;
                charIndex = char;
            }
        }
        else
        {
            num += char;
        }
    }
    let result = Object.entries(hashmap).sort().join(' ').replaceAll(',','');
    console.log(result)
    return result;
}
const str2 = 'c20b10' 
console.time()
rehash2(str1);
rehash(str2)
console.timeEnd();
// console.log(rehash(str1) === expected1, "<-- should be \"true\"");