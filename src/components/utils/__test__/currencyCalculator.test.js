import currencyCalculator from "../currencyCalculator";

const rates = {
  USD: 0.34252,
  EUR: 0.36525,
};
describe("Instruction tests", () => {
  it("normal value", () => {
    expect(currencyCalculator("100", "USD", "UAH", rates)).toBe("3425.200");
  });
  it("extreme values", () => {
    expect(currencyCalculator("0", "USD", "UAH", rates)).toBe("0.000");
  });
  it("incorrect values", () => {
    expect(currencyCalculator("sfds", "USD", "UAH", rates)).toBe("NaN");
  });
  it("incorrect  condition currency", () => {
    expect(currencyCalculator("100", "USB", "UAH", rates)).toBe("0.000");
  });
  it("incorrect  result currency", () => {
    expect(currencyCalculator("200", "USD", "UAB", rates)).toBe("0.000");
  });
  it("negative value", () => {
    expect(currencyCalculator("-100", "USD", "UAB", rates)).toBe("0.000");
  });
});
