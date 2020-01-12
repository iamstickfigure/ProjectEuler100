function largestPalindromeProduct(n) {
  const min = Math.pow(10, n-1);
  const max = Math.pow(10, n) - 1;

  let largeP = 0;
  let largeJ = 0;

  for(let i = max; i >= min; i--) {
    for(let j = max; j >= i && j > largeJ; j--) {
      if(isPalindrome(i * j)) {
        const p = i * j;
        // console.log(`${i}*${j} = ${p}`);
        
        if(p > largeP) {
          largeP = p;
          largeJ = j;
        }
      }
    }

    if(i * max < largeP) {
      return largeP;
    }
  }

  return largeP;
}

function isPalindrome(n) {
  const str = `${n}`;

  for(let i = 0; i < Math.floor(str.length / 2); i++) {
    if(str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }

  return true;
}

// console.log(isPalindrome(522111111225));

console.log(largestPalindromeProduct(3));

// 99 99

// 98 99
// 98 98

// 97 99
// 97 98
// 97 97

// 96 99
// 96 98
// 96 97
// 96 96
