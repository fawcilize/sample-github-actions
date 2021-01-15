function add(a, b) {
  return a + b;
}

describe("add", () => {
  test("1 + 2 = 3", () => {
    const result = add(1, 2);
    expect(result).toEqual(3);
  });
});
