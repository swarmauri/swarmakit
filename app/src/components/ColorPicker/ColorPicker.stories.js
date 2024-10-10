import React from 'react';
import ColorPicker from './ColorPicker';

export default {
  title: 'Forms/ColorPicker',
  component: ColorPicker,
  argTypes: {
    onSelect: { action: 'color selected' },
  },
};

const Template = (args) => <ColorPicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectedColor: '',
};

export const Selected = Template.bind({});
Selected.args = {
  selectedColor: '#FF0000',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  selectedColor: '',
};