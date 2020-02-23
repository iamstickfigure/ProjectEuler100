function maximumPathSumI(triangle) {
  let pathSums = {};
  const numRows = triangle.length;

  for(let row = numRows-1; row >= 0; row--) {
    for(let col = 0; col < rowLen(row); col++) {
      if(row+1 < numRows) {
        pathSums[`${row},${col}`] = triangle[row][col] + Math.max(
          pathSums[`${row+1},${col}`],
          pathSums[`${row+1},${col+1}`],
        );
      }
      else {
        pathSums[`${row},${col}`] = triangle[row][col];
      }
    }
  }

  return pathSums[`0,0`];
}

function rowLen(row) {
  // Silly, but it's self-documenting, and I'm going with it.
  return row + 1;
}

const testTriangle = [[3, 0, 0, 0],
                      [7, 4, 0, 0],
                      [2, 4, 6, 0],
                      [8, 5, 9, 3]];

const numTriangle = [
  [75,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [95, 64,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [17, 47, 82,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [18, 35, 87, 10,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [20,  4, 82, 47, 65,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [19,  1, 23, 75,  3, 34,  0,  0,  0,  0,  0,  0,  0,  0,  0],
  [88,  2, 77, 73,  7, 63, 67,  0,  0,  0,  0,  0,  0,  0,  0],
  [99, 65,  4, 28,  6, 16, 70, 92,  0,  0,  0,  0,  0,  0,  0],
  [41, 41, 26, 56, 83, 40, 80, 70, 33,  0,  0,  0,  0,  0,  0],
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29,  0,  0,  0,  0,  0],
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14,  0,  0,  0,  0],
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57,  0,  0,  0],
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48,  0,  0],
  [63, 66,  4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31,  0],
  [ 4, 62, 98, 27, 23,  9, 70, 98, 73, 93, 38, 53, 60,  4, 23]
];

console.log(maximumPathSumI(testTriangle));
console.log(maximumPathSumI(numTriangle))
