function add(a, b) {
  return a + b;
}

describe("add", () => {
  test("1 + 2 = 3", () => {
    const result = add(1, 2);
    expect(result).toEqual(3);
  });

  test("1 + -1 = 0", () => {
    const result = add(1, -1);
    expect(result).toEqual(0);
  });
});
