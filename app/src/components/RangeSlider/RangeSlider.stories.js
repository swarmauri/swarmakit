import React, { useState } from 'react';
import RangeSlider from './RangeSlider';

export default {
  title: 'Forms/RangeSlider',
  component: RangeSlider,
};

const Template = (args) => {
  const [value, setValue] = useState(args.value || 50);
  return (
    <RangeSlider
      {...args}
      value={value}
      onChange={(e) => setValue(Number(e.target.value))}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  value: 50,
};

export const Min = Template.bind({});
Min.args = {
  value: 0,
};

export const Max = Template.bind({});
Max.args = {
  value: 100,
};

export const Hover = Template.bind({});
Hover.args = {
  value: 75,
};

export const Active = Template.bind({});
Active.args = {
  value: 25,
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: 50,
  disabled: true,
};