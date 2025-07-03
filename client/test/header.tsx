import React from "react";
import { render, screen } from "@testing-library/react";

import Header from "../components/header/Header";

// Mock the Cart component to isolate Header tests from Cart implementation
jest.mock("../cart/Cart", () => () => <div data-testid="cart">Cart</div>);

// Mock Next.js Link component to simplify testing by rendering children directly as <a> tags
jest.mock("next/link", () => {
  return ({ children }: { children: React.ReactElement }) => {
    return React.cloneElement(children);
  };
});

describe("Header component", () => {
  it("renders the logo inside a link to homepage", () => {
    render(<Header />);

    // Find the link element that contains the logo image by its accessible name (alt text)
    const logoLink = screen.getByRole("link", { name: /octopus energy logo/i });
    expect(logoLink).toBeInTheDocument();

    // Find the logo image by its alt text and check it is present and has the expected CSS class
    const logoImg = screen.getByAltText("Octopus Energy Logo");
    expect(logoImg).toBeInTheDocument();
    expect(logoImg).toHaveClass("logo");
  });

  it("renders the Cart component", () => {
    render(<Header />);

    // Verify that the mocked Cart component is rendered inside the Header
    expect(screen.getByTestId("cart")).toBeInTheDocument();
  });
});
