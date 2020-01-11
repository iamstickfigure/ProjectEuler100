function multiplesOf3and5(number) {
  let sum = 0;
  let mult = 0;

  for(let i = 0; mult < number; i++) {
    sum += mult;
    mult = i * 3;
  }

  mult = 0;

  for(let i = 0; mult < number; i++) {
    sum += mult;
    if(i % 3 === 0) {
      i++;
    }
    mult = i * 5;
  }

  return sum;
}

multiplesOf3and5(1000);
