import React from "react";
import { render, screen } from "@testing-library/react";
import Comp from ".";

describe("search component", () => {
  test("renders search input", () => {
    render(<Comp />);
    const greetText = screen.getByText("Search");
    expect(greetText).toBeInTheDocument();
  });
});
