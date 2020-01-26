function primeSummation(n) {
  let primes = [2, 3];
  let sum = 2 + 3;

  if(n <= 2) {
    return 0;
  }
  else if(n <= 3) {
    return 2;
  }
  else if(n <= 4) {
    return sum;
  }

  for(let i = 1; true; i++) {
    const num1 = 6 * i - 1;
    const num2 = 6 * i + 1;

    if(num1 >= n) {
      break;
    }

    if(isPrime(num1, primes)) {
      primes.push(num1);

      sum += num1;
    }

    if(num2 >= n) {
      break;
    }

    if(isPrime(num2, primes)) {
      primes.push(num2);

      sum += num2;
    }
  }

  return sum;
}

function isPrime(num, prevPrimes) {
  for(let i = 0; prevPrimes[i] <= Math.sqrt(num); i++) {
    if(num % prevPrimes[i] === 0) {
      return false;
    }
  }

  return true;
}

console.log(primeSummation(2000000));
