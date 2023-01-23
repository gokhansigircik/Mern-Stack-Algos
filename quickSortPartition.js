/* 
  Params: nums, start, end
    - start and end are indexes
    - start will be 0, and end will be the last idx.
  Steps:
  1. Select the last element to be your pivot value.
  2. The pivot index begins at start.
  3. Loop through nums from start to end.
  4. If the current value is less than or equal to the pivot value,
     swap the current value with the value at the pivot index
     and increment the pivot index.
  5. After the loop, swap the value at pivot index
     with the pivot value at end.
  6. Finally, return the pivot index,
     the index where the left section of smaller values end.
*/

// const nums1 = [11, 8, 14, 3, 6, 2, 7];
// const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
// const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
// const nums4 = [2, 1];

/*
  Psuedo: 
    .1) [11, 8, 14, 3, 6, 2, 7] <- pivot number is always at the end... pivot num = 7
    .2) [11, 8, 14, 3, 6, 2, 7] <- next find pivot index which is always the beginning of the array pivot idx = 11
    .3) next we compare pivNum to nums[pivIdx]
*/

/**
 * Partitions the given array in-place by selecting the number at the last
 * index to use it as a "pivot" value, then arranges all numbers less than the
 * pivot to be to its left and all larger numbers to its right.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of array
 *    being processed.
 * @param {number} right The index indicating the end of the slice of array
 *    being processed.
 * @returns {number} The idx where left section of smaller items ends.
 * // pivot value: value at end of nums
  // pivot index: start
  // for loop:
  // if condition inside loop
  // wat does the if condition look like?
  // inside the if, we swap current value with
  // value at pivot index and
  // increment pivot index
  // after for loop, swap pivot value with
  // value at pivot index
  // return pivot index
 */
  function partition(nums = [], start = 0, end = nums.length - 1) {
    let pivNum = nums[end];
    let pivIdx = start;
  
    for (let i = start; i < end; i++) {
      if (nums[i] <= pivNum) {
        [nums[i], nums[pivIdx]] = [nums[pivIdx], nums[i]];
        pivIdx++;
      }
    }
    [nums[pivIdx], nums[end]] = [nums[end], nums[pivIdx]];
    return pivIdx;
  }
  
  // export default partition;
  
  /* 
    Create a function that uses partition to fully sort an array
    in-place.
    Unstable sort.
    
    Time Complexity
      - Best: O(n log(n)) linearithmic.
      - Average: O(n log(n)) linearithmic.
      - Worst: O(n^2) quadratic.
    
    Space: O(1) constant.
    Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be the
        last idx.
    - later these params will be used to specify a sub section of the array to
        partition.
    Steps:
      - start by partitioning the full array
          (use the previously built partition algo).
      - then partition the left side of the array
          (left of the returned partition idx) and the right side
          (right of the returned partition idx), recursively.
  */
  
  // import partition from './w1d5-partition.js';
  
  const nums1 = [11, 8, 14, 3, 6, 2, 7];
  const expected1 = [2, 3, 6, 7, 8, 11, 14];
  
  const nums2 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
  const expected2 = [1, 3, 4, 9, 12, 13, 17, 21, 27];
  
  const nums3 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
  const expected3 = [2, 3, 3, 3, 6, 7, 8, 11, 14];
  
  const nums4 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
  const expected4 = [1, 3, 4, 9, 12, 13, 17, 21, 27];
  
  /**
   * Recursively sorts the given array in-place by mutating the array.
   * Best: O(n log(n)) linearithmic.
   * Average: O(n log(n)) linearithmic.
   * Worst: O(n^2) quadratic.
   * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
   *    visualization.
   * @param {Array<number>} nums
   * @param {number} left The index indicating the start of the slice of the
   *    given array being processed.
   * @param {number} right The index indicating the end of the slice of the
   *    given array being processed.
   * @returns {Array<number>} The given array after being sorted.
   */
  function quickSort(nums = [], start = 0, end = nums.length - 1) {
    if (start < end) {
      const pivotIdx = partition(nums, start, end);
      quickSort(nums, start, pivotIdx - 1);
      quickSort(nums, pivotIdx + 1, end);
    }
    return nums;
  }
  
  console.log(quickSort(nums1));
  console.log(quickSort(nums2));
  console.log(quickSort(nums3));
  console.log(quickSort(nums4));
  
  // export default quickSort;
  