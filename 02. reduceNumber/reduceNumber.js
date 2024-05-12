const reduceNumber = (number) => {
  let steps = 0;

  if (number <= 1) return steps;

  while (number > 1) {
    steps++;

    number =
      number % 4 === 3
        ? (number += 1)
        : number % 2 !== 0
        ? (number -= 1)
        : (number /= 2);
  }

  return steps;
};

export default reduceNumber;
