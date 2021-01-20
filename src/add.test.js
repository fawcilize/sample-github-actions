function add(a, b) {
  return a + b;
}

describe("add", () => {
  test("adds numbers", () => {
    const result = add(1, 2);
    expect(result).toEqual(3);
  });

  test("works with negative numbers", () => {
    const result = add(1, -1);
    expect(result).toEqual(0);
  });
});
