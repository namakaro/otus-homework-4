import React from 'react';
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import Cell from "./Cell"

// jest.fn() - это заглушка, mock-объект
// jest не нужно импортировать, он настравивается глобально

afterEach(cleanup);

describe("Cell", () => {
  it("calls onClick callback on click by cell", () => {
    const onClick = jest.fn();
    const x = 3;
    const y = 3;
    const width = 40;
    const height = 40;
    render(
      <Cell clickMe={onClick} key={`${x}_${y}`} x={x} y={y} width={width} height={height}></Cell>
      );
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  })

  it("calls onClick callback with passed x, y params", () => {
    const onClick = jest.fn();
    const width = 40;
    const height = 40;
    const coords = {
      x: 5,
      y: 7,
    };

    render(<Cell clickMe={onClick}  key={`${coords.x}_${coords.y}`} {...coords} width={width} height={height}>{`${coords.x}_${coords.y}`}</Cell>);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledWith(...Object.values(coords));
  });
});
