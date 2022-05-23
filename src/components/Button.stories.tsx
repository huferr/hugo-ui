import React from "react";
import { Story, Meta } from "@storybook/react";
import "./Button.css";

import { Button } from "./Button.component";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    model: {
      defaultValue: "simple",
      type: { name: "string", required: true },
      options: ["simple", "outlined"],
      control: { type: "radio" },
    },
  },
} as Meta;

const Template: Story = (args) => {
  return (
    <Button {...args} model={args.model}>
      Buttonffrfrfrfr
    </Button>
  );
};

export const Default = Template.bind({});
