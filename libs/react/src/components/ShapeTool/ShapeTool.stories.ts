import React from 'react';
import { Meta, Story } from '@storybook/react';
import ShapeTool, { ShapeToolProps } from './ShapeTool';

export default {
  title: 'component/Drawing/ShapeTool',
  component: ShapeTool,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ShapeToolProps> = (args) => <ShapeTool {...args} />;

export const Default = Template.bind({});
Default.args = {
  onShapeDrawn: (shape, props) => console.log(shape, props),
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
};
Active.play = ({ canvasElement }) => {
  const button = canvasElement.querySelector('.shape-toggle');
  button?.click();
};

export const ShapeSelected = Template.bind({});
ShapeSelected.args = {
  ...Default.args,
};
ShapeSelected.play = ({ canvasElement }) => {
  const button = canvasElement.querySelector('.shape-toggle');
  button?.click();
  const select = canvasElement.querySelector('select');
  select?.dispatchEvent(new Event('change', { bubbles: true }));
};

export const ShapeDrawn = Template.bind({});
ShapeDrawn.args = {
  ...Default.args,
};
ShapeDrawn.play = ({ canvasElement }) => {
  const button = canvasElement.querySelector('.shape-toggle');
  button?.click();
  const drawButton = canvasElement.querySelector('.draw-button');
  drawButton?.click();
};