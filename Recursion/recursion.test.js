"use strict";

describe("Test division", () => {
  test("Return the division result", () => {
    expect(division(10, 2)).toStrictEqual(5);
    expect(division(10, 0)).toStrictEqual(0);
    expect(division(0, 10)).toStrictEqual(0);
  });
});

describe("Test pow", () => {
  test("It should work as Math.pow(x,n)", () => {
    expect(pow(10, 2)).toStrictEqual(100);
    expect(pow(10, 0)).toStrictEqual(1);
    expect(pow(0, 0)).toStrictEqual(1);
  });
});

describe("Test fibonacci", () => {
  test("It should implement fibonacci series logic", () => {
    expect(fibonacci(0)).toStrictEqual(0);
    expect(fibonacci(1)).toStrictEqual(1);
    expect(fibonacci(2)).toStrictEqual(1);
    expect(fibonacci(3)).toStrictEqual(2);
    expect(fibonacci(4)).toStrictEqual(3);
  });
});

describe("Test permutations", () => {
  test("It should return a list of possible combinations", () => {
    expect(permutations(3, 3)).toStrictEqual([
      "123",
      "132",
      "213",
      "231",
      "312",
      "321",
    ]);
    expect(permutations(3, 0)).toStrictEqual([]);
  });
});
