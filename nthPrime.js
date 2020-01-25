
function nthPrime(nPlusOne) {
  let primes = [2, 3];

  for(let i = 1; primes.length < nPlusOne; i++) {
    const num1 = 6 * i - 1;
    const num2 = 6 * i + 1;

    if(isPrime(num1, primes)) {
      primes.push(num1);
    }

    if(isPrime(num2, primes)) {
      primes.push(num2);
    }
  }

  return primes[nPlusOne - 1];
}

function isPrime(num, prevPrimes) {
  for(let i = 0; prevPrimes[i] <= Math.sqrt(num); i++) {
    if(num % prevPrimes[i] === 0) {
      return false;
    }
  }

  return true;
}

console.log(nthPrime(6));
console.log(nthPrime(10));
console.log(nthPrime(100));
console.log(nthPrime(1000));
console.log(nthPrime(10001));
