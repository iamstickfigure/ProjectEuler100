function longestCollatzSequence(limit) {
  let collatzLookup = {};
  let maxLength = 0;
  let maxStart = -1;

  for(let i = 1; i < limit; i++) {
    let len = collatz(i, collatzLookup);

    if(len > maxLength) {
      maxLength = len;
      maxStart = i;
    }
  }

  return maxStart;
}

function collatz(start, collatzLookup) {
  let num = start;
  let len = 0;

  while(num !== 1) {
    if(collatzLookup[num]) {
      collatzLookup[start] = len + collatzLookup[num];
      return collatzLookup[start];
    }
    else {
      if(num % 2 === 0) {
        num = num / 2;
      }
      else {
        num = 3 * num + 1;
      }
      len++;
    }
  }

  collatzLookup[start] = len;
  return len;
}

console.log(longestCollatzSequence(14));
console.log(longestCollatzSequence(5847));
console.log(longestCollatzSequence(46500));
console.log(longestCollatzSequence(54512));
console.log(longestCollatzSequence(100000));
