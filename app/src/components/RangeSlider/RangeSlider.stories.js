import React from 'react';
import RangeSlider from './RangeSlider';

export default {
  title: 'Forms/RangeSlider',
  component: RangeSlider,
  argTypes: {
    onChange: { action: 'slider value changed' },
  },
};

const Template = (args) => <RangeSlider {...args} />;

export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 100,
  value: 50,
  disabled: false,
};

export const Min = Template.bind({});
Min.args = {
  min: 0,
  max: 100,
  value: 0,
  disabled: false,
};

export const Max = Template.bind({});
Max.args = {
  min: 0,
  max: 100,
  value: 100,
  disabled: false,
};

export const Hover = Template.bind({});
Hover.args = {
  min: 0,
  max: 100,
  value: 50,
  disabled: false,
};

export const Active = Template.bind({});
Active.args = {
  min: 0,
  max: 100,
  value: 75,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  min: 0,
  max: 100,
  value: 50,
  disabled: true,
};