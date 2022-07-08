import React from "react";
import { render } from "@testing-library/react";
import Comp from "./home";

describe("home screen contents", () => {
  test("update document title", () => {
    render(<Comp />);
    const title = document.title;
    expect(title).toBe("Home Page");
  });
});
