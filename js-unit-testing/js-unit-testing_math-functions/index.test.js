import { add } from "./index.js";
import { subtract } from "./index.js";
import { multiply } from "./index.js";
import { divide } from "./index.js";

test("add() returns 5 if called with arguments(2,3)", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});
test("add() returns negative value if called with negative greater arguments(-5,2)", () => {
  const result = add(-5, 2);
  expect(result).toBeLessThan(0);
});
test("add() returns a value close to 0.3 if called with arguments(0.1,0.2)", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

test("subtract() returns 10 if called with arguments(15,5)", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("subtract() returns a negative value if called with  second argumentis greater than the first", () => {
  const result = subtract(1, 5);
  expect(result).toBeLessThan(0);
});

test("multiply() returns 8 if called with multiply(2, 4)", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});
test("multiply() returns negative value if first argument is negative)", () => {
  const result = multiply(-2, 4);
  expect(result).toBeLessThan(0);
});
test("multiply() returns negative value if second argument is negative)", () => {
  const result = multiply(12, -4);
  expect(result).toBeLessThan(0);
});
test("multiply() returns positive value if both arguments are negative)", () => {
  const result = multiply(-10, -4);
  expect(result).toBeGreaterThan(0);
});

test("divide() returns 3 if called with divide(9, 3)", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});
test('divide() returns "You should not do this!" if called with 0 as second argument', () => {
  const result = divide(9, 0);
  expect(result).toBe("You should not do this!");
});
