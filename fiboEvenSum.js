function fiboEvenSum(n) {
  let seq = [1, 2];
  let sum = 2;

  for(let i = 2; i < n; i++) {
    seq[i] = seq[i-1] + seq[i-2];

    if(seq[i] % 2 === 0) {
      sum += seq[i];
    }
  }

  return sum;
}

console.log(fiboEvenSum(10));
