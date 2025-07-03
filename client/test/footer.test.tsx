import React from "react";
import { render, screen } from "@testing-library/react";

import Footer from "../components/footer/Footer";

describe("Footer component", () => {
  it("renders the company information text", () => {
    render(<Footer />);

    // Check that the footer contains specific company information text
    expect(
      screen.getByText(
        /Octopus Energy Ltd is a company registered in England and Wales/i
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Registered office: UK House, 5th floor/i)
    ).toBeInTheDocument();
  });

  it("has the correct CSS class applied", () => {
    const { container } = render(<Footer />);

    // Check that the <footer> element has the correct CSS class from the module
    const footerElement = container.querySelector("footer");
    expect(footerElement).toHaveClass("footer");
  });
});
