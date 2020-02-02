function divisibleTriangleNumber(n) {
  let factored = {};
  let tri = 1;
  
  for(let numDiv = 0, i = 1; numDiv <= n; i++) {
    tri = triangular(i);

    factored[tri] = factorize(tri, factored);

    numDiv = numDivisors(factored[tri]);
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

function factorize(n, factored) {
  let factors = {};
  let num = n;

  const tryDiv = pp => {
    if(num % pp === 0) {
      num /= pp;

      if(factors[pp]) {
        factors[pp]++;
      }
      else {
        factors[pp] = 1;
      }

      return true;
    }

    return false;
  }

  let i = 0
  let [pp1, pp2] = potentialPrimes(i);

  while(i <= n) {
    if(tryDiv(pp1)) {
      if(num === 1) {
        break;
      }
      else if(factored[num]) {
        return combineFactors(factors, factored[num]);
      }

      continue;
    }
    
    if(tryDiv(pp2)) {
      if(num === 1) {
        break;
      }
      else if(factored[num]) {
        return combineFactors(factors, factored[num]);
      }

      continue;
    }

    [pp1, pp2] = potentialPrimes(++i);
  }

  return factors;
}

function combineFactors(f1, f2) {
  // f1 will be mutated

  for(let factor in f2) {
    if(f1[factor]) {
      f1[factor] += f2[factor];
    }
    else {
      f1[factor] = f2[factor];
    }
  }

  return f1;
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
