import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button } from './Button.component'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
  },
} as Meta;

const Template: Story = (args) => {
  return (
    <Button
      {...args}
    />
  );
};

export const Default = Template.bind({});
