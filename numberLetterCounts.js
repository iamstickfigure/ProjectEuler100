const digits = [
  '',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen'
];

const tens = [
  '',
  '',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety',
];

function numberLetterCounts(limit) {
  let sum = 0;

  for(let i = 1; i <= limit; i++) {
    const words = numToWords(i);

    sum += words.length;
  }

  return sum;
}

function numToWords(num) {
  let words = [];

  const lastTwo = num % 100;

  if(lastTwo < digits.length) {
    words.push(digits[lastTwo]);
  }
  else {
    const last = num % 10;
    words.push(digits[last]);
    words.push(tens[(lastTwo - last) / 10]);
  }

  const lastThree = num % 1000;
  const hundreds = (lastThree - lastTwo) / 100;

  if(hundreds > 0) {
    if(lastTwo > 0) {
      words.push('and');
    }
    words.push('hundred');
    words.push(digits[hundreds]);
  }

  const remaining = (num - lastThree) / 1000;

  if(remaining > 0) {
    words.push('thousand');
    words.push(numToWords(remaining));
  }

  // Doesn't really need to be reversed to count the letters, but I like that it can be displayed.
  return words.reverse().join('');
}

console.log(numToWords(52984)); // fiftytwothousandninehundredandeightyfour

console.log(numberLetterCounts(5));
console.log(numberLetterCounts(150));
console.log(numberLetterCounts(1000));
