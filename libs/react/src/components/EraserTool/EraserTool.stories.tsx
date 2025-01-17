import React from 'react';
import { Meta, Story } from '@storybook/react';
import EraserTool, { EraserToolProps } from './EraserTool';

export default {
  title: 'component/Drawing/EraserTool',
  component: EraserTool,
  tags: ['autodocs'],
} as Meta;

const Template: Story<EraserToolProps> = (args) => <EraserTool {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialSize: 10,
  onEraserChange: (size) => console.log(size),
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
};
Active.play = ({ canvasElement }) => {
  const button = canvasElement.querySelector('.eraser-toggle');
  button?.click();
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
};
Disabled.play = ({ canvasElement }) => {
  const button = canvasElement.querySelector('.eraser-toggle');
  button?.click();
  button?.click();
};