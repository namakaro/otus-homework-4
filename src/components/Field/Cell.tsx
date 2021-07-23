import React, { FC } from "react";

const Cell: FC<CellProps> = ({ children, x, y, background, width, height, border, margin, clickMe }) => {
  border = "1px solid";
  margin = "5px";

  const buttonStyle = {
    width,
    background,
    height,
    border,
    margin
  };
  return (
    <>
      <button style = { buttonStyle } onClick={() => clickMe(x || 0, y || 0)}>
        {children}
      </button>
    </>
  );
};

export default Cell;