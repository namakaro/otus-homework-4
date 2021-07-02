import React from "react";
import { action } from "@storybook/addon-actions";
import { Cell } from "./Cell";

export default {
  title: "Cell",
  argTypes: {
    background:  {
      control: { type: "color" },
      defaultValue: "#aaffb5",
   },
    width: { 
      control: { type: 'range', min: 20, max: 60, step: 10 }, 
      defaultValue: "40px",
    },
    height: { 
      control: { type: 'range', min: 20, max: 60, step: 10 }, 
      defaultValue: "40px",
    },
    children: {
      control: { type: "text" },
    },
  }
}

export const CellExample = (args: any) => 
<>
  <Cell 
    clickMe={action("Button click")}
    key="jsx"
    {...args}
  />
</>

export const CellsExampleX = (args: any) => 
<>
  <Cell 
    clickMe={action("Button click")}
    key="0_0"
    {...args}
  />
  <Cell 
    clickMe={action("Button click")}
    key="0_1"
    {...args}
  />
</>

export const CellsExampleY = (args: any) => 
<>
  <Cell 
    clickMe={action("Button click")}
    key="0_0"
    {...args}
  />
  <br/>
  <Cell 
    clickMe={action("Button click")}
    key="1_0"
    {...args}
  />
</>
