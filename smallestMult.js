function smallestMult(n) {
  // 10 => 5*2 * 3*3 * 2*2 * 7

  let maxFactors = {};

  for(let i = n; i > 1; i--) {
    const facts = factorize(i);
    for(let fact in facts) {
      if(!maxFactors[fact] || maxFactors[fact] < facts[fact]) {
        maxFactors[fact] = facts[fact];
      }
    }
  }

  let num = 1;

  for(let fact in maxFactors) {
    num *= Math.pow(parseInt(fact), maxFactors[fact]);
  }

  return num;
}

function factorize(n) {
  let factors = {};
  let num = n;

  for(let i = 2; i <= n;) {
    if(num % i === 0) {
      num /= i;

      if(factors[i]) {
        factors[i]++;
      }
      else {
        factors[i] = 1;
      }
    }
    else {
      i++;
    }

    if(num === 1) {
      break;
    }
  }

  return factors;
}

// console.log(factorize(40));

console.log(smallestMult(20));
