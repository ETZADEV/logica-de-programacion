const primesNumbers = (number) => {
  const primes = [];

  if (number >= 2) primes.push(2);

  for (let i = 1; i <= number; i += 2) {
    let counter = 0;

    for (let j = 0; j <= number; j++) {
      if (i % j === 0) counter++;
    }

    if (counter === 2) primes.push(i);
  }

  return primes;
};

export default primesNumbers;
