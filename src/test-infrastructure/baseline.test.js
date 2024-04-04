import { test, expect } from "@jest/globals";

function add(a, b) {
  return a + b;
}

test("It adds 1 and 2 and gets 3 as a result", () => {
  const result = add(1, 2);
  expect(result).toEqual(3);
});

test("It adds NaN and 2 and gets NaN as a result", () => {
  const result = add(NaN, 2);
  expect(result).toEqual(NaN);
});

test("It adds undefined and 2 and gets NaN as a result", () => {
  const result = add(undefined, 2);
  expect(result).toEqual(NaN);
});
