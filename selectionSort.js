/* 
  https://visualgo.net/en/sorting
    
  Selection sort works by iterating through the list, finding the minimum
  value, and moving it to the beginning of the list. Then, ignoring the first
  position, which is now sorted, iterate through the list again to find the
  next minimum value and move it to index 1. This continues until all values
  are sorted.
  Unstable sort.
  
  Time Complexity
    - Best: O(n^2) quadratic.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic.
  Space: O(1) constant.
  Selection sort is one of the slower sorts.
  - ideal for: pagination, where page 1 displays 10 records for example,
      you run selection sort for 10 iterations only to display the first 10
      sorted items.
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts given array in-place.
 * Best: O(n^2) quadratic.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */

function selectionSort(nums = []) {
  // your code here
  // create two pointers - current & minimum [use i as the current pointer - extra var for min var]
  // loop -> traverse through the array and check every other element in the array against the current min
  // nested loop 2 for loops or a while loop and a for loop [one can be nested inside the other]
  // comparison 
  // find a minimum
  // swap if current and min stayed the same
  // i < nums.length is the same as i <= nums.length - 1 (with this is will not go out of bounds)
  // while loop more complex to build syntax wise for loop everything can go in the same line
  for (let i = 0; i < nums.length; i++) {
      let min = i;
      // common to us i, j , k as var
      // get's complex if do more than 2 for loops
                                  // go to the end everytime
      for (let j = i + 1; j < nums.length; j++) {
          // now to compare
              // checking if value of j is less than the current min
              // just looking where that index
          if (nums[j] < nums[min]) {
              min = j;
          }
      }
      // current location for the index is i - if ++ and nothing changes then go to the next index
      // if different then need to swap places
      if ( min != i) {
          // swapping if diff. - swap min with i
          // j in this line doesn't exist since we exited j's for loop -> can't us it here

          //? this way is not language dependent -> another way
          //! let temp = nums[i]; 
          //* nums[i] = nums[min];
          //TODO nums[min] = temp;

          // destructer method -> swapping things in place
          // this only works in JS
          [nums[i], nums[min] ] = [nums[min], nums[i]];
      }
  }
  return nums
}

console.log(selectionSort(numsRandomOrder));

// *****************SOLUTION1 ************
// function selectionSort(nums = []) {
//   let current;
//   let minimum;
//   let temp;

//   for(let i = 0; i<nums.length; i++){
//       current = i;
//       minimum = current;
//       for(let j = i+1; j<nums.length; j++){           
//           if(nums[j]<nums[minimum]){
//               minimum=j;
//           }
//           console.log(`nums:${nums}, minimum:${minimum}, current:${current}`)
//       }
//       temp=nums[minimum];
//       nums[minimum]=nums[current];
//       nums[current]=temp;
//   }
//   return nums;
// }

// console.log(selectionSort(numsRandomOrder));



//***********bo's solution *************************

// function selectionSort(nums = []) {
//   // declare var 
//   let min;
//   let curr = 0;

//   // while loop to tract current index
//   while (curr < nums.length){
//       // set the mininum as current index
//       min = curr;

//       // go through the rest elements in nums array 
//       // update the mininum
//       for (let i = curr + 1; i < nums.length; i++){
//           if (nums[i] < nums[min]) min = i;
//       }
//       // swap the curr and min
//       if (curr != min) [nums[curr], nums[min]] = [nums[min], nums[curr]];
//       curr++;
//   }
//   return nums;
// }


// ***********brandon's solution******************

// function selectionSort(nums = []) {
//   let minimum;
//   let current;
//   for (let i = 0; i < nums.length; i++){
//       current = i
//       minimum = current
//       for (let j = i+1; j <nums.length; j++){
//           if (nums[j] < nums[minimum]){
//               minimum = j
//           }
//       }
//       if (current != minimum){
//           [nums[current],nums[minimum]] = [nums[minimum],nums[current]]

//       }

//   }

//   return nums 
// }