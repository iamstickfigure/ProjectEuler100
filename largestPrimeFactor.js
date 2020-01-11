function largestPrimeFactor(number) {
  let largest = number;
  let i = 2;

  if(number === 2) {
    return 2;
  }
  
  for(i = 3; i < number; i += 2) {
    if(i === largest) {
      return largest;
    }

    if(largest % i === 0) {
      largest = largest / i;
    }
  }
  return largest;
}

console.log(largestPrimeFactor(13195));
