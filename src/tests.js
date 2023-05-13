import { sumAsync, subtract, subtractAsync } from "./math.js";

// this one should fail on purpose
test("sumAsync adds numbers asynchronously", async () => {
  const result = await sumAsync(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtractAsync subtracts numbers asynchronously", async () => {
  const result = await subtractAsync(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

test("sumAsync adds numbers asynchronously", async () => {
  const result = subtract(15, 10);
  const expected = 5;
  expect(result).toBe(expected);
});

// jest-fn implementation
test("verify sum was called", async () => {
  const sum = qwe.fn((a, b) => a + b);
  let result = sum(3, 97);
  let expected = 100;
  expect(result).toBe(expected);

  // fn specific tests
  expect(sum.mock.calls).toHaveLength(1);
  expect(sum.mock.callCount).toBe(1);
  expect(sum.mock.calls[0][0]).toBe(3);
  expect(sum.mock.calls[0][1]).toBe(97);
  expect(sum.mock.results[0].value).toBe(100);

  sum(5, 5);
  expect(sum.mock.calls).toHaveLength(2);
  expect(sum.mock.calls[1][1]).toBe(5);
  expect(sum.mock.results[1].value).toBe(10);
});
