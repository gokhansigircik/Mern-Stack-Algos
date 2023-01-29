// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];
const expected1 = 2;
/* 
  left to right diagonal: 1 + 5 + 9 = 15
  right to left diagonal: 3 + 5 + 9 = 17
  absolute difference = 2
*/

const squareMatrix2 = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
  left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
  right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
  absolute difference = 0
*/

/**
 * Calculates the absolute diagonal difference of a square matrix.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
 *    a square matrix (rows and columns).
 * @returns {number} Represents the absolute difference between the top left to
 *    bottom right diagonal and the top right to bottom left diagonal.
 */
function diagonalDifference(sqrMatrix) {
  // your code here
  let leftSum = 0;
  let rightSum = 0;
  const length1 = sqrMatrix[0].length;

  for (let i = 0; i < length1; i++) {
      leftSum += sqrMatrix[i][i];
      rightSum += sqrMatrix[i][length1 - i - 1];
  }
  if (leftSum < rightSum) {
      return (rightSum - leftSum);
  }
  else {
      return (leftSum - rightSum);
  }
}

// you need to console.log

// export default diagonalDifference;

// ***********solutiuon 2*****

function diagonalDifference(sqrMatrix) {
  // declare two index variable for left and right
  // declare two sum variable for left and right
  let idxLeft = 0, idxRight = sqrMatrix.length - 1, sumLeft = 0, sumRight = 0;
  
  while (idxLeft < sqrMatrix.length) {
    sumLeft += sqrMatrix[idxLeft][idxLeft];
    sumRight += sqrMatrix[idxLeft][idxRight];
    idxLeft++;
    idxRight--;
  }

  return Math.abs(sumLeft - sumRight);
}