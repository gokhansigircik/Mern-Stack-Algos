/* 
  https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
  Stable sort
  
  Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.
  Space: O(1) constant.
  For review, create a function that uses BubbleSort to sort an unsorted array in-place.
  For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given nums in-place by mutating the array.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given nums after being sorted.
 */
// function bubbleSort(nums = []) {}

function swap(arr, first, second){
  var temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp
}

function bubbleSort(arr = []) {
  var i, j;
  for (var i = 0; i < arr.length; i++ ){
      for ( var j = 0; j < arr.length - i - 1; j++){
          if (arr[j] > arr[j+1]){
              swap(arr, j, j+1);    // if u use swap funct in js u dont need a temp variable;
          }
      }
  }
  return(arr)
}

console.log(bubbleSort(numsRandomOrder))
console.log(bubbleSort(numsReversed))



// *******************Brandons solution 2nd************

// function bubbleSort(nums = []) {

  //     let new_array = [];
  //     let temp;
  
  //     let length = nums.length
  //     for(let j = 0; j < length; j++){
          
  
  
  //         for(let i = 0; i < nums.length; i++){
  //             console.log(nums.length)
  //             if(nums[i] < nums[i+1]){
  //                 temp = nums[i + 1]
  //                 nums[i+1] = nums[i]
  //                 nums[i] = temp           
                  
  //             }
  //         }
  //         new_array.push(nums[nums.length-1])
  //         nums.pop()
              
  //     }
  //     return new_array
  
  
  // }
  
  // console.log(bubbleSort(numsRandomOrder))
