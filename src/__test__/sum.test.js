import sum from "../Components/sum";

test("Sum function should return the sum of 2 number", () => {
    const result = sum(3,7)
    expect(result).toBe(10);
})