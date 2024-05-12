import sequenceDomino from "./sequenceDomino";

describe("Sequence of domino pieces", () => {
  it("Should return [[4, 5], [5, 0], [0, 1]] when input requests 3 pieces", () => {
    const result = sequenceDomino([4, 5], 3);
    const expected = [
      [4, 5],
      [5, 0],
      [0, 1],
    ];

    expect(result).toEqual(expected);
  });

  it("Should return [[4, 5], [5, 0], [0, 1], [1, 3], [3, 4]] when input request 5 pieces", () => {
    const result = sequenceDomino([4, 5], 5);
    const expected = [
      [4, 5],
      [5, 0],
      [0, 1],
      [1, 3],
      [3, 4],
    ];

    expect(result).toEqual(expected);
  });
});
