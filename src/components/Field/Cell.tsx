import React, { FC } from "react";

export interface Props {
  children?: string
  x?: number
  y?: number
  background?: string
  width?: string
  height?: string
  border?: string
  margin?: string
  id?: string
  clickMe: (x: number, y: number) => void
}

export const Cell: FC<Props> = ({ children, x, y, background, width, height, border, margin, clickMe }) => {
  border = "1px solid";
  margin = "5px";
  width = "40px";
  height = "40px";

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