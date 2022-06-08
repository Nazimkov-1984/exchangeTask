import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Header tests", () => {
  it("Render Header", async () => {
    render(<Footer />);
    const component = await screen.findByTestId(/footer/i);
    expect(component).toBeInTheDocument();
  });
});
