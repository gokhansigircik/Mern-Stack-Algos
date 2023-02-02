/* 
https://leetcode.com/problems/container-with-most-water/
*/

/* 
Finds the container that can hold the most water based on its area.
A container's length is the distance between indexes and the two sides are
the heights at those indexes.

See: https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
*/

/* 
You are given an integer array height of length n. There are n vertical
lines drawn such that the two endpoints of the ith line are (i, 0) and
(i, height[i]).

Find two lines that together with the x-axis form a container, such
that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
*/

const heights1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const expected1 = 49;
// Explanation: heights1[1] and heights1[8] as container edges.
// Length = 8 - 1. Height = 7

const heights2 = [1, 1];
const expected2 = 1;

const heights3 = [4, 3, 2, 1, 4];
const expected3 = 16;

const heights4 = [1, 2, 1];
const expected4 = 2;

/**
 * Finds the container that can hold the most water based on it's area.
 * A container's length is the distance between indexes and the two sides are
 * the heights at those indexes.
 * @see https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {number[]} heights
 * @returns {number} Representing the max area of a container.
 */

function containerWithMostWater(heights) {
  let maxArea = 0;
  let left = 0;
  let right = heights.length - 1;
  
  while (left < right) {
    maxArea = Math.max(maxArea, Math.min(heights[left], heights[right]) * (right - left));
    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}
console.log(containerWithMostWater(heights1));
console.log(containerWithMostWater(heights2));
console.log(containerWithMostWater(heights3));
console.log(containerWithMostWater(heights4));


// ************2nd**********

// function containerWithMostWater(heights) {
//   // your code here
//   let max = 0;
//   let area = 0;

//   for(let i = 0; i < heights.length; i++){
//       for(let j = i + 1; j < heights.length; j++){

//           heights[i] > heights[j] ? area = (j-i) * heights[j] : area = (j-i) * heights[i]
//           max = Math.max(max, area)
//       }
//   }

//   return max
// }