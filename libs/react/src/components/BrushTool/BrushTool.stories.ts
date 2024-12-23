import React from 'react';
import { Meta, Story } from '@storybook/react';
import BrushTool, { BrushToolProps } from './BrushTool';

export default {
  title: 'component/Drawing/BrushTool',
  component: BrushTool,
  tags: ['autodocs'],
} as Meta;

const Template: Story<BrushToolProps> = (args) => <BrushTool {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialColor: '#000000',
  initialSize: 10,
  initialOpacity: 1,
  onBrushChange: (color, size, opacity) => console.log(color, size, opacity),
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
};
Active.play = ({ canvasElement }) => {
  const button = canvasElement.querySelector('.brush-toggle');
  button?.click();
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
};
Disabled.play = ({ canvasElement }) => {
  const button = canvasElement.querySelector('.brush-toggle');
  button?.click();
  button?.click();
};