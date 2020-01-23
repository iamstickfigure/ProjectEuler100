function sumSquareDifference(n) {
  return squareOfSum(n) - sumOfSquares(n);
}

function squareOfSum(n) {
  const sum = n * (n+1) / 2;
  return sum * sum;
}

function sumOfSquares(n) {
  return n * (n+1) * (2*n+1) / 6;
}

sumSquareDifference(100);
