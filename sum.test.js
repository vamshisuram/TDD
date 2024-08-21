import { sum } from "./sum";
// const { sum } = require("./sum");

test("sum", () => {
  console.log("sum calculations check");
  expect(sum(1, 2)).toBe(3);
});
