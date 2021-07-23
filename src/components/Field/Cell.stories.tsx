import React from "react";
import { action } from "@storybook/addon-actions";
import Cell from "./Cell";

export default {
  title: "Cell",
  argTypes: {
    background:  {
      control: { type: "color" },
      defaultValue: "#aaffb5",
   },
    width: { 
      control: { type: 'range', min: 20, max: 60, step: 10 }, 
      defaultValue: 40,
    },
    height: { 
      control: { type: 'range', min: 20, max: 60, step: 10 }, 
      defaultValue: 40,
    },
    children: {
      control: { type: "text" },
    },
  }
}

export const CellExample = (args: any) => 
<>
  <Cell 
    {...args}
    clickMe={action("Button click")}
    key="jsx"
  />
</>

export const CellsExampleX = (args: any) => 
<>
  <Cell 
    {...args}
    clickMe={action("Button click")}
    key="0_0"
  />
  <Cell 
    {...args}
    clickMe={action("Button click")}
    key="0_1"
  />
</>

export const CellsExampleY = (args: any) => 
<>
  <Cell 
    {...args}
    clickMe={action("Button click")}
    key="0_0"
  />
  <br/>
  <Cell 
    {...args}
    clickMe={action("Button click")}
    key="1_0"
  />
</>
