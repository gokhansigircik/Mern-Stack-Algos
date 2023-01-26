/* 
  Given an array of objects representing people, and
  a string representing a bad habit, return a
  "santasNaughtyList" containing the first and last
  names of all the people who have the matching bad
  habit so that santa knows how much coal he needs.
  
  Bonus: after solving it, make a 2nd solution to practice
  functional programming with built in methods.
*/

const students = [
  {
    firstName: "Kermit",
    lastName: "the Frog",
    habits: [
      "doesn't wash dishes",
      "falls asleep in lecture",
      "shows up early",
    ],
  },
  {
    firstName: "Miss",
    lastName: "Piggy",
    habits: ["shows up late", "washes dishes", "helps peers"],
  },
  {
    firstName: "Fozzie",
    lastName: "Bear",
    habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
  },
  {
    firstName: "Gonzo",
    lastName: "the Great",
    habits: ["shows up early", "helps peers", "washes dishes"],
  },
];

const badHabit1 = "doesn't wash dishes";
const expected1 = ["Kermit the Frog", "Fozzie Bear"];

const badHabit2 = "shows up late";
const expected2 = ["Miss Piggy", "Fozzie Bear"];

const badHabit3 = "vapes too much";
const expected3 = [];


// function santasNaughtyList(persons, badHabit) {
//   let expected = []
//   persons.map (person => {
//     if (person.habits.includes(badHabit)) {
//         let fullname = person.firstName + ' ' + person.lastName 
//         expected.push (fullname) 
//     } 
//   })
//   return expected
// }

// console.log(santasNaughtyList(students,badHabit3));
// console.log(santasNaughtyList(students,badHabit1));
// console.log(santasNaughtyList(students,badHabit2));
/**
 * Finds a list of people whose habits contain the given bad habit.
 * - Time O(?).
 * - Space O(?).
 * @typedef {Object} Person
 * @property {string} firstName
 * @property {string} lastName
 * @property {Array<string>} habits
 * @param {Array<Person>} persons
 * @param {string} badHabit
 * @returns {Array<Person>} The people that have the given bad habit.
 */

// *********another way of solving*****************


function santasNaughtyListFunctional(persons, badHabit) {
  let expected = []  // array to push everything into
  for (let i = 0; i < persons.length;i++) {    // this goes through array
    for (let j = 0;j < persons[i].habits.length; j++) {  // this goes through the habits of the object
      if (persons[i].habits[j] === badHabit) {        // this compares the habits to bad habits
        let fullName = persons[i].firstName + ' ' + persons[i].lastName      // creates var full name and adds names that meet the condition
        expected.push (fullName)                   // pushes full name to expected array
      }
    }
  }
  return expected                  // returns expected array 
}
console.log(santasNaughtyListFunctional(students,badHabit1));
console.log(santasNaughtyListFunctional(students,badHabit2));
console.log(santasNaughtyListFunctional(students,badHabit3));