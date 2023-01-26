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
function santasNaughtyList(persons, badHabit) {
  // your code here
}

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
function santasNaughtyListFunctional(persons, badHabit) {
  // your code here
  const expected = persons.filter((person) => person.habits.includes(badHabit));
  
  const naughtyList = expected.map((person) => `${person.firstName} ${person.lastName}`);
  return naughtyList;
}

console.log(santasNaughtyListFunctional(students, badHabit1));
console.log(santasNaughtyListFunctional(students, badHabit2));
console.log(santasNaughtyListFunctional(students, badHabit3));