function sumFactorialDigits(n) {
  // Mostly borrowed from my powerDigitSum.js
  
  let carry = 0;
  let currNum = [1];

  for(let i = 1; i <= n; i++) {
    carry = 0;
    for(let j = 0; j < currNum.length; j++) {
      currNum[j] *= i;
      currNum[j] += carry;
      carry = Math.floor(currNum[j] / 10);
      currNum[j] %= 10;
    }

    while(carry) {
      currNum[currNum.length] = carry % 10;
      carry = Math.floor(carry / 10);
    }
  }

  let sum = 0;
  for(let digit of currNum) {
    sum += digit;
  }
  return sum;
}

console.log(sumFactorialDigits(10));
console.log(sumFactorialDigits(25));
console.log(sumFactorialDigits(50));
console.log(sumFactorialDigits(75));
console.log(sumFactorialDigits(100));
