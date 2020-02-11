function powerDigitSum(exponent) {
  let carry = 0;
  let currNum = [1];
  let numLen;

  for(let i = 1; i <= exponent; i++) {
    numLen = currNum.length;
    carry = 0;
    for(let j = 0; j < numLen; j++) {
      currNum[j] *= 2;
      currNum[j] += carry;
      carry = ~~(currNum[j] / 10);
      currNum[j] %= 10;
    }

    if(carry) {
      currNum[numLen] = carry;
    }
  }

  let sum = 0;
  for(let digit of currNum) {
    sum += digit;
  }
  return sum;
}

console.log(powerDigitSum(15));
console.log(powerDigitSum(128));
console.log(powerDigitSum(1000));
