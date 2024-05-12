const sequenceDomino = (startPiece, numberOfPieces) => {
  let pieces = [startPiece];
  let topNumber;
  let bottomNumber;

  for (let i = 1; i < numberOfPieces; i++) {
    topNumber = pieces[i - 1][1];
    bottomNumber = validator(topNumber + adder(i));

    pieces.push([topNumber, bottomNumber]);
  }

  return pieces;
};

const validator = (number) => {
  if (number > 6) return 0;

  return number;
};

const adder = (value) => {
  if (value % 2 !== 0) return 2;

  return 1;
};

export default sequenceDomino;
