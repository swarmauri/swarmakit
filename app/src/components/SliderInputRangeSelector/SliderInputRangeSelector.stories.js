import React, { useState } from 'react';
import SliderInputRangeSelector from './SliderInputRangeSelector';

export default {
  title: 'Components/SliderInputRangeSelector',
  component: SliderInputRangeSelector,
};

const Template = (args) => {
  const [value, setValue] = useState(args.value);
  return (
    <SliderInputRangeSelector
      {...args}
      value={value}
      onChange={setValue}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 100,
  value: 50,
  step: 1,
};

export const CustomRange = Template.bind({});
CustomRange.args = {
  min: 10,
  max: 50,
  value: 30,
  step: 2,
};

export const Disabled = Template.bind({});
Disabled.args = {
  min: 0,
  max: 100,
  value: 50,
  disabled: true,
};