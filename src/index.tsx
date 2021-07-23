import { action } from "@storybook/addon-actions";
import React from "react";
import { render } from "react-dom";
import CellField, { Toggler } from "./components/Field/CellField";

render(
  <Toggler>
    <CellField initialValue={1} clickMe={() => console.log("Click cell")} xCount={3} yCount={3} />
  </Toggler>,
  document.getElementById("root")
);