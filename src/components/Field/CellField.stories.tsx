import React from "react";
import { action } from "@storybook/addon-actions";

import { CellField } from "./CellField";

export default {
  title: "Field",
  argTypes: {
    xCount: { control: { type: 'range', min: 1, max: 10, step: 1 }, defaultValue: "5" },
    yCount: { control: { type: 'range', min: 1, max: 10, step: 1 }, defaultValue: "5" },
 }
};

export const CellFieldExample = (args: any) => {
  return (
    <>
      <CellField
        key="jsx"
        {...args}
      />
    </>
  )
};
