function divisibleTriangleNumber(n) {
  let factored = {};
  let tri = 1;
  
  for(let numDiv = 0, i = 1; numDiv <= n; i++) {
    tri = triangular(i);

    factorize(tri, factored);

    numDiv = numDivisors(countFactors(tri, factored));
    // console.log(tri + " " + numDiv + " " + JSON.stringify(factored[tri]));
  }

  return tri;
}

function triangular(i) {
  return i * (i + 1) / 2;
}

function numDivisors(factors) {
  let volume = 1;

  for(let fact in factors) {
    volume *= factors[fact] + 1;
  }

  return volume;
}

function countFactors(n, factored) {
  let factors = {};

  for(let num = n; num !== 1 && factored[num];) {
    const op = factored[num];

    if(factors[op.div]) {
      factors[op.div] += 1;
    }
    else {
      factors[op.div] = 1;
    }

    num = op.quo;
  }

  return factors;
}

function factorize(n, factored) {
  let num = n;

  const tryDiv = pp => {
    if(num % pp === 0) {
      factored[num] = {
        num: num,
        div: pp,
        quo: num / pp
      };

      num = factored[num].quo;

      return true;
    }

    return false;
  }
  
  let i = 0;
  let [pp1, pp2] = potentialPrimes(i);

  while(i <= n) {
    if(tryDiv(pp1)) {
      if(num === 1) {
        break;
      }
      else if(factored[num]) {
        break;
      }

      continue;
    }
    
    if(tryDiv(pp2)) {
      if(num === 1) {
        break;
      }
      else if(factored[num]) {
        break;
      }

      continue;
    }

    [pp1, pp2] = potentialPrimes(++i);
  }
}

function potentialPrimes(i) {
  if(i === 0) {
    return [2, 3];
  }

  return [6*i - 1, 6*i + 1];
}

console.log(divisibleTriangleNumber(5));
console.log(divisibleTriangleNumber(23));
console.log(divisibleTriangleNumber(167));
console.log(divisibleTriangleNumber(374));
console.log(divisibleTriangleNumber(500));
