import React from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import CellField from "./CellField";

afterEach(cleanup);

describe("Field", () => {
  it("renders cells", () => {
    const onClick = jest.fn();
    const xCount = 3;
    const yCount = 3;
    render(
      <CellField xCount={xCount} yCount={yCount} clickMe={onClick}/>
    );
    expect(screen.getAllByText("0_0").length).toBe(1);
  });

  it("passed onClick inside cells", () => {
    const onClick = jest.fn();
    const xCount = 3;
    const yCount = 3;
    render(<CellField xCount={xCount} yCount={yCount} clickMe={onClick} />);

    fireEvent.click(screen.getByRole("button", { name: "1_2" }));
    fireEvent.click(screen.getByRole("button", { name: "1_2" }));
    fireEvent.click(screen.getByRole("button", { name: "1_2" }));
    fireEvent.click(screen.getByRole("button", { name: "1_2" }));
    fireEvent.click(screen.getByRole("button", { name: "1_2" }));
    expect(screen.getAllByText("Clicked: 5").length).toBe(1);
  });
});
