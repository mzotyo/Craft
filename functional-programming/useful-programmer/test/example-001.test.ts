import { getTea } from "../src/example-001";

describe("Example 1", () => {
  test("Call the getTea function to get 2 cups of tea.", () => {
    expect(getTea(2)).toEqual(["greenTea", "greenTea"]);
  });
});
