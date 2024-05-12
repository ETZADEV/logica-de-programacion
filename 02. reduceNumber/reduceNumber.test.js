import reduceNumber from "./reduceNumber";

describe("Reduce number", () => {
  it("Should return 5 steps if the input number is 15", () => {
    const result = reduceNumber(15);
    const expected = 5;

    expect(result).toBe(expected);
  });

  it("Should return 0 steps if the input number is 0", () => {
    const result = reduceNumber(0);
    const expected = 0;

    expect(result).toBe(expected);
  });

  it("Should return 0 steps if the input number is 1", () => {
    const result = reduceNumber(1);
    const expected = 0;

    expect(result).toBe(expected);
  });

  it("Should return 23 steps if the input number is 328593", () => {
    const result = reduceNumber(328593);
    const expected = 23;

    expect(result).toBe(expected);
  });
});
