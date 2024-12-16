import React from 'react';
import { Meta, Story } from '@storybook/react';
import FillTool, { FillToolProps } from './FillTool';

export default {
  title: 'component/Drawing/FillTool',
  component: FillTool,
  tags: ['autodocs'],
} as Meta;

const Template: Story<FillToolProps> = (args) => <FillTool {...args} />;

export const Default = Template.bind({});
Default.args = {
  active: false,
  onFill: (color) => console.log(`Filled with ${color}`),
  tolerance: 50,
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  active: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  active: false,
};