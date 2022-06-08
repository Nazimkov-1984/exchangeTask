import { render, screen } from "@testing-library/react";
import Flag from "react-world-flags";
import Header from "../Header";

describe("Header tests", () => {
  it("Render Header", async () => {
    render(<Header />);
    const component = await screen.findByTestId(/header/i);
    expect(component).toBeInTheDocument();
  });
  it("Flag render test", async () => {
    render(<Flag code="USA" data-testid="flag" />);
    const component = await screen.findByTestId(/flag/i);
    expect(component).toBeInTheDocument();
  });
});
