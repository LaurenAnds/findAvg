import { getAverage } from "./sum.js";

// jest docs for expect "matchers"
// https://jestjs.io/docs/expect

test("finds average of 1, 2", () => {
    expect(getAverage([1, 2])).toEqual(1.5);
});

test("finds average of 10, 20", () => {
    expect(getAverage([10, 20])).toEqual(15);
});

test("finds average of 0, 0", () => {
    expect(getAverage([0, 0])).toEqual(0);
});

test("finds average of -10, -20", () => {
    expect(getAverage([-10, -20])).toEqual(-15);
});
test("finds average of empty array", () => {
    expect(getAverage([])).toEqual(NaN);
});