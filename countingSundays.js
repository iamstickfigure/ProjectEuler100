function countingSundays(firstYear, lastYear) {
  // This problem is just tedious, and not at all fun or challenging, so I'm just going to use js date objects

  let count = 0;

  for(let date = new Date(firstYear, 0, 1); date.getFullYear() <= lastYear; date.setMonth(date.getMonth() + 1)) {
    if(date.getDay() === 0) {
      count++;
    }
  }

  return count;
}

console.log(countingSundays(1943, 1946));
console.log(countingSundays(1995, 2000));
console.log(countingSundays(1901, 2000));
