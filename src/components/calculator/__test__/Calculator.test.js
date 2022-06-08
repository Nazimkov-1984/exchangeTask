import { render, screen } from "@testing-library/react";
import Calculator from "../Calculator";

describe("Calculator tests", () => {
  it("Render Calculator", async () => {
    render(<Calculator />);
    const component = await screen.findByTestId(/calculator/i);
    expect(component).toBeInTheDocument();
  });
});
