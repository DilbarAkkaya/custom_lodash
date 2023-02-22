import filter from './index';
describe("Filter Function", () => {
  test("function is defined", () => {
    expect(filter).toBeDefined();
  });
  test("Predicate for filter elements > 0 is worked", () => {
    expect(filter([-1, 0, 6, 5, -9], (element) => element > 0)).toStrictEqual([6, 5]);
  });
  test("Predicate for filter elements > 0 is worked", () => {
    expect(Array.isArray(filter([-1, 0, 6, 5, -9], (element) => element > 0))).toBe(true);
  });
});
