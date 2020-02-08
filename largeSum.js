function largeSum(arr) {
  // supporting variable length numbers (doesn't have to be 50)
  let maxStrLength = -1;
  let strLength;
  let carryColumns = [];
  let colSum = 0;

  for(let col = 0; maxStrLength < 0 || col < maxStrLength; col++) {
    colSum = 0;
    for(let i = 0; i < arr.length; i++) {
      strLength = arr[i].length;
      if(strLength > maxStrLength) {
        maxStrLength = strLength;
      }

      if(strLength - col >= 0) {
        colSum += parseInt(arr[i][strLength - col - 1]);
      }
    }

    handleCarries(carryColumns, col, colSum);
  }

  let outNum = 0;
  const numCols = carryColumns.length;
  for(let i = 0, col = numCols - 10; i < 10; i++, col++) {
    outNum += carryColumns[col] * 10**(i);
  }

  return outNum;
}

function handleCarries(carryColumns, col, colSum) {
  let newSum = colSum;

  for(let digit, i = 0; newSum > 0; i++) {
    if(carryColumns[col + i]) {
      newSum += carryColumns[col + i];
    }

    digit = newSum % 10;
    newSum = ~~(newSum / 10);

    carryColumns[col + i] = digit;
  }

  if(!carryColumns[col]) {
    carryColumns[col] = 0;
  }
}

// only change code above this line

const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];

console.log(largeSum(testNums));
