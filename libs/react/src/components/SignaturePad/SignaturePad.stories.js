// SignaturePad.stories.js
import React from 'react';
import SignaturePad from './SignaturePad';

export default {
  title: 'Components/SignaturePad',
  component: SignaturePad,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    canvasWidth: { control: 'number' },
    canvasHeight: { control: 'number' },
    penColor: { control: 'color' },
  },
};

const Template = (args) => <SignaturePad {...args} />;

export const Default = Template.bind({});
Default.args = {
  canvasWidth: 500,
  canvasHeight: 200,
  penColor: '#000',
};

export const SmallPad = Template.bind({});
SmallPad.args = {
  canvasWidth: 300,
  canvasHeight: 150,
  penColor: '#000',
};

export const CustomColorPad = Template.bind({});
CustomColorPad.args = {
  canvasWidth: 500,
  canvasHeight: 200,
  penColor: '#ff0000',
};