import React from "react";
import { render, screen, within } from "@testing-library/react";
import Comp from ".";
import logs from "data";

describe("history component", () => {
  function RenderComp() {
    render(<Comp logs={logs} />);

    return {
      histList: screen.getByTestId("log-list"),
      histLogs: screen.getAllByTestId("log-action"),
      getLogActions() {
        return screen.getAllByTestId("log-action").map((item) => ({
          date: within(item).getByTestId("log-action-header").textContent,
        }));
      },
    };
  }

  test("renders history list", () => {
    const { histList } = RenderComp();

    expect(histList).toBeInTheDocument();
  });
});
