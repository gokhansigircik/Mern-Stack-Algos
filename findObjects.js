/* 
  Given:
    - a search criteria object with primitive values only (ints,
      strings, booleans)
    - a list of objects

  Return any object that matches all the key value pairs in the search
  criteria object.

  Bonus: write a 2nd solution using built-in methods to practice functional
  programming.
*/

const items = [
  { firstName: "Bob", lastName: "Bobbert", age: 31 },
  { firstName: "John", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "Smith", age: 27 },
  { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria1 = {
  firstName: "Bob",
  age: 31,
};

const expected1 = [
  { firstName: "Bob", lastName: "Bobbert", age: 31 },
  { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria2 = {
  lastName: "Smith",
};

const expected2 = [
  { firstName: "John", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "Smith", age: 27 },
];

/**
 * Finds the objects that match the given search criteria.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object} criteria
 * @param {Array<Object>} collection
 * @returns {Array<Object>} The found objects.
 */
function findObjects(criteria, collection) {
  // your code here
}

/**
 * - Time: O(?).
 * - Space: O(?).
 */

function findObjectsFunctional(criteria, collection) {
  // your code here
  let answers =[]

  for ( let i = 0; i < collection.length; i++){
    let found = true
    for (key in criteria){
      if (criteria[key] !== collection[i][key]){
        found = false
        break;
      }
    }
    if (found === true){
      answers.push(collection[i])
    }
  }
  return answers;
}

console.log(findObjectsFunctional(searchCriteria1, items))
console.log(findObjectsFunctional(searchCriteria2, items))

