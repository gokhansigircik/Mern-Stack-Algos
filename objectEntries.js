/* 
  Recreate Object.entries method

  Given an object, return an array of arrays of the object's
  key value pairs, where each key value pair is a 2 item array.

  Do not include key value pairs from the given object's
  prototype (these are included by default when looping over an
  object's keys)
*/

const obj1 = {
  name: "Pizza",
  calories: 9001,
};

const expected1 = [
  ["name", "Pizza"],
  ["calories", 9001],
];

const proto = { inheritance: "inherited key", keyOnProto: "val from proto" };

// This object contains inherited key value pairs from the above proto obj.
const obj2 = Object.assign(Object.create(proto), {
  firstName: "Foo",
  lastName: "Bar",
  age: 13,
});

const expected2 = [
  ["firstName", "Foo"],
  ["lastName", "Bar"],
  ["age", 13],
];

/**
 * Returns a 2d array of key value pairs from the given obj.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object} obj
 * @typedef {Array<Array<string, any>>} output The nested array should look
 *    like [key, val]
 * @returns {output}
 */

  // your code here
  // remember to pseudocode the steps FIRST!
  //create an variable result array for us to return in the end,
  //loop through objects with enhanced for loop;
  //push the [key, object[key]] into the result array;
  //return the result array;

  // function entries(obj) {
//   let result = [];
//   for (let key in obj) {
//     result.push([key, obj[key]]);
//   }
//   return result;
// }

// console.log(entries(obj1));
// console.log(entries(obj2));

// export default entries;


// *********2nd solution***********

function entries(obj) {
  // your code here
  let answers = [];
  
  for (key in obj){
    if (obj.hasOwnProperty(key)){
      let subArr = [];
      subArr.push(key);
      subArr.push(obj[key]);
      answers.push(subArr);
    }
  }
  return answers;
}

console.log(entries(obj1));
console.log(entries(obj2));