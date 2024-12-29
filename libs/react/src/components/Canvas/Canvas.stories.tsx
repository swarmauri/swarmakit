import React from 'react';
import { Meta, Story } from '@storybook/react';
import Canvas, { CanvasProps } from './Canvas';

export default {
  title: 'component/Drawing/Canvas',
  component: Canvas,
  tags: ['autodocs'],
} as Meta;

const Template: Story<CanvasProps> = (args) => <Canvas {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  width: 800,
  height: 600,
  brushColor: '#000000',
  brushSize: 5,
};

export const DrawingInProgress = Template.bind({});
DrawingInProgress.args = {
  ...Empty.args,
};

export const Complete = Template.bind({});
Complete.args = {
  ...Empty.args,
};

export const Cleared = Template.bind({});
Cleared.args = {
  ...Empty.args,
};
Cleared.play = ({ canvasElement }) => {
  const button = canvasElement.querySelector('.clear-button');
  button?.click();
};