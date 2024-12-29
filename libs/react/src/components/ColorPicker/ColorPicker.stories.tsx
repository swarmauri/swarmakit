import React from 'react';
import { Meta, Story } from '@storybook/react';
import ColorPicker, { ColorPickerProps } from './ColorPicker';

export default {
  title: 'component/Drawing/ColorPicker',
  component: ColorPicker,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ColorPickerProps> = (args) => <ColorPicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  onColorSelect: (color) => console.log(color),
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
};
Active.play = ({ canvasElement }) => {
  const button = canvasElement.querySelector('.color-toggle');
  button?.click();
};

export const ColorSelected = Template.bind({});
ColorSelected.args = {
  ...Default.args,
};
ColorSelected.play = ({ canvasElement }) => {
  const button = canvasElement.querySelector('.color-toggle');
  button?.click();
  const colorInput = canvasElement.querySelector('input[type="color"]');
  if (colorInput) {
    colorInput.value = '#ff5733';
    colorInput.dispatchEvent(new Event('input', { bubbles: true }));
  }
};