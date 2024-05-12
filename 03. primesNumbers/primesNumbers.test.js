import primesNumbers from "./primesNumbers";

describe("Primes Numbers", () => {
  it("Should return [2,3,5] when input is 5", () => {
    const result = primesNumbers(5);
    const expected = [2, 3, 5];

    expect(result).toEqual(expected);
  });

  it("Should return [] when input is 1", () => {
    const result = primesNumbers(1);
    const expected = [];

    expect(result).toEqual(expected);
  });

  it("Should return [2] when input is 2", () => {
    const result = primesNumbers(2);
    const expected = [2];

    expect(result).toEqual(expected);
  });

  it("Should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97] when input is 100", () => {
    const result = primesNumbers(100);
    const expected = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
      71, 73, 79, 83, 89, 97,
    ];

    expect(result).toEqual(expected);
  });
});
