/* 
  Stable sort.
  Visualization:
  https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
  Time Complexity
    - Best case: O(n log(n)) linearithmic.
    - Average case: O(n log(n)) linearithmic.
    - Worst case: O(n log(n)) linearithmic.
  Space: O(n) linear
  steps:
    1. create a merge function to merge two already sorted arrays into a single
        sorted array.
      - you do NOT need to work in place, ok to use a new array
    2. create mergeSort function to sort the provided array
      - split the array in half and recursively merge the halves using the
          previously created merge function.
      - splitting of arrays stops when array can no longer be split.
      - an array of 1 item is by definition sorted, so two arrays of 1 item
          can therefore be merged into a sorted array.
*/

// merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
function merge(left = [], right = []) {
  // your code here
  let arr = []
  while(left.length && right.length){
    if(left[0]> right[0]){
      arr.push(right.shift())
    }
    else{
      arr.push(left.shift())
    }

  }
  return [...arr,...left,...right]
}
// this is for the first func 
// console.log(merge(sortedA4,sortedB4))

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Creates a new sorted array based on the given nums being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {Array<number>} nums
 * @returns {Array<number>} A New sorted array.
 */
function mergeSort(nums = []) {}

// **********chris***********

function merge(left = [], right = []) {
  //empty array to merge sorted arrays in
  const mergedArray = [];
  //counters to keep track of the indexes on both halves
  let leftIndex = 0, rightIndex = 0;

  //loop that will constantly check lowest current value of each array and push
  //this will keep going until one half reaches its end
  while (leftIndex < left.length && rightIndex < right.length) {
      //when left side is smallest, that side is pushed and incremented,
      //right is ignored
      if (left[leftIndex] < right[rightIndex]) {
          mergedArray.push(left[leftIndex]);
          leftIndex++;
      }
      //when right side is smallest, that side is pushed and incremented,
      //left is ignored
      else {
          mergedArray.push(right[rightIndex]);
          rightIndex++;
      }
  }
  //Fills in whichever array hasn't been pushed to the mergedArray yet
  while(leftIndex < left.length){
      mergedArray.push(left[leftIndex]);
      leftIndex++;
  }
  while(rightIndex < right.length){
      mergedArray.push(right[rightIndex]);
      rightIndex++;
  }
  
  return mergedArray;
}

function mergeSort(nums = []){
  //base case for stopping the recursive call
  if (nums.length <= 1) {
      return nums;
  }
  //assign a middle point to divide the array into two parts
  const mid = nums.length / 2;
  const left = [], right = [];

  //loop assigns first half of array to left,
  //second half of array to right
  for (let i = 0; i < nums.length; i++) {
      if (i < mid) left.push(nums[i]);
      else right.push(nums[i]);
  }

  //recursive call, as everything is coming back, 
  //the merge function will sort the smaller subarrays
  return merge(mergeSort(left), mergeSort(right));
}


// *******hasan*************

/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
function merge(left = [], right = []) {
  // your code here
  let leftI = 0;
  let rightI = 0;
  let sorted = [];
  while (leftI < left.length && rightI < right.length) {
    if (left[leftI] < right[rightI]) {
      sorted.push(left[leftI]);
      leftI++;
    }
    else {
      sorted.push(right[rightI]);
      rightI++;
    }
  }
  while (leftI < left.length) {
    sorted.push(left[leftI]);
    leftI++;
  }
  while (rightI < right.length) {
    sorted.push(right[rightI]);
    rightI++;
  }
  return sorted;
}


const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Creates a new sorted array based on the given nums being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {Array<number>} nums
 * @returns {Array<number>} A New sorted array.
 */
function mergeSort(nums = []) {
  // your code here
  if (nums.length <= 1) {
    return nums;
  }
  let midI = Math.floor(nums.length / 2);
  const left = nums.slice(0, midI);
  const right = nums.slice(midI);
  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);
  return merge(leftSorted, rightSorted);
}
console.log(mergeSort(numsRandomOrder));
console.log(mergeSort(numsReversed));