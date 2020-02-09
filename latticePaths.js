function latticePaths(gridSize) {
  // n = gridSize
  // There are a total of n right movements, and n down movements 
  //    (total of 2n movements)
  // The number of permutations of movements is (2n)!
  // But that assumes the right movements are unique (same with downs)
  // So we must divide the movement permutations by the 
  //    permutations of the right movements and the
  //    permutations of the left movements
  // This results in this expression
  // (2n)! / (n!)^2

  let result = 1;

  for(let i = gridSize * 2; i > 0; i--) {
    if(i > gridSize) {
      result *= i;
    }

    if(i % 2 === 0) {
      result /= i/2;
    }
  }

  return result;
}

console.log(latticePaths(2));
console.log(latticePaths(4));
console.log(latticePaths(9));
console.log(latticePaths(20));
