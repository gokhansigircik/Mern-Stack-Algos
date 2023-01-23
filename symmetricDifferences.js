/*
  Given two arrays of ints

  return the symmetric differences, (aka disjunctive union)
    - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
      think of a venn diagram filled in except the overlapping middle part is not filled in (the intersection is excluded)
    - i.e., if an element is in at least one of the arrays, but not in any other, it should be included (dupes included 1 time only)

  Venn Diagram Visualization:
    - https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
*/

const setA1 = [1, 2];
const setB1 = [2, 1];
const expected1 = [];
// Explanation: 1 and 2 are in both arrays so are excluded

const setA2 = [1, 2, 3];
const setB2 = [4, 5, 6];
const expected2 = [1, 2, 3, 4, 5, 6];
// Explanation: neither array has shared values, so all are included

const setA3 = [4, 1, 2, 3, 4];
const setB3 = [1, 2, 3, 5, 5];
const expected3 = [4, 5];
/* 
  Explanation: 1, 2, and 3 are shared so are excluded
    4 and 5 are included because they exist only in 1 array, but have duplicates, so only one copy of each is kept
*/

const setA4 = [];
const setB4 = [];
const expected4 = [];

const setA5 = [];
const setB5 = [1, 2, 3];
const expected5 = [1, 2, 3];

function insertionSort(nums) {
  let n = nums.length;
  for (let i = 1; i < n; i++) {
    // Choosing the first element in our unsorted subarray
    let current = nums[i];
    // The last element of our sorted subarray
    let j = i - 1;
    while (j > -1 && current < nums[j]) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = current;
  }
  return nums;
}

function symmetricDifferences(numsA, numsB) {
  const sortedA = insertionSort(numsA);
  const sortedB = insertionSort(numsB);

  const newArr = [];
  let i = 0, j = 0;


  while (i < sortedA.length || j < sortedB.length) {
    if (sortedA[i] === sortedB[j]) {
      i++;
      j++;
    } else if (sortedA[i] < sortedB[j] || j >= sortedB.length) {
      if (i < sortedA.length && sortedA[i] !== newArr[newArr.length -1]) newArr.push(sortedA[i]);
      i++;
    } else {
      if (j < sortedB.length && sortedB[j] !== newArr[newArr.length -1]) newArr.push(sortedB[j]);
      j++;
    }
  }
  return newArr;
}

// export default symmetricDifferences; 
console.log(symmetricDifferences(setA1,setB1));
console.log(symmetricDifferences(setA2,setB2));
console.log(symmetricDifferences(setA3,setB3));
console.log(symmetricDifferences(setA4,setB4));
console.log(symmetricDifferences(setA5,setB5));


// *********solution2 ********

// function symmetricDifference(numsA, numsB) {
//   let result = [];
//   for (let i = 0; i < numsA.length; i++) {
//     if (!numsB.includes(numsA[i]) && !(numsA.includes(numsB[i]))) {
//       result.push(numsA[i]);
//     }
//   }
//   for (i = 0; i < numsB.length; i++) {
//     if (!numsA.includes(numsB[i]) && !(numsB.includes(numsA[i]))) {
//       result.push(numsB[i]);
//     }
//   }
//   return result;
// }

// ***************BO SOLUTION3************

// function symmetricDifferences(numsA, numsB) {
//   // create two new Set objects from input arrays numsA and numsB
//   // set object gets rid of duplication
//   const setA = new Set(numsA);
//   const setB = new Set(numsB);

//   // filter the input arrays numsA and numsB with Set.has() method
//   // hence, acquire two new arrays notInNumsA and notInNumsB which do not contain any elements in the other array
//   const notInNumsA = numsB.filter( num => !setA.has(num) );
//   const notInNumsB = numsA.filter( num => !setB.has(num) );

//   // create a new Set object by concatinating the two acquired arrays and get rid of any duplication
//   const disjunctiveUnion = new Set(notInNumsB.concat(notInNumsA));
  
//   // cast the disjunctiveUnion Set object back to array and return it
//   return Array.from(disjunctiveUnion);

// }