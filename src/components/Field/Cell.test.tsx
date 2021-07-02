import React from 'react';
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import { Cell } from "./Cell"

// jest.fn() - это заглушка, mock-объект
// jest не нужно импортировать, он настравивается глобально

afterEach(cleanup);

describe("Cell", () => {
  it("calls onClick callback on click by cell", () => {
    const onClick = jest.fn();
    const x = 3;
    const y = 3;
    render(
      <Cell clickMe={onClick} key={`${x}_${y}`} x={x} y={y}></Cell>
      );
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  })

  it("calls onClick callback with passed x, y params", () => {
    const onClick = jest.fn();
    const coords = {
      x: 5,
      y: 7,
    };

    render(<Cell clickMe={onClick}  key={`${coords.x}_${coords.y}`} {...coords}>{`${coords.x}_${coords.y}`}</Cell>);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledWith(...Object.values(coords));
  });
});
