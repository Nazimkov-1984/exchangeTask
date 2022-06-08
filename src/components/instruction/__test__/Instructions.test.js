import { render, screen } from "@testing-library/react";
import Instruction from "../Instruction";

describe("Instruction tests", () => {
  it("Render Instruction", async () => {
    render(<Instruction />);
    const component = await screen.findByTestId(/instruction/i);
    expect(component).toBeInTheDocument();
  });
});
