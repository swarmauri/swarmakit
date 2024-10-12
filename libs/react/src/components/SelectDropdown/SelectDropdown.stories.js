import React, { useState } from 'react';
import SelectDropdown from './SelectDropdown';

export default {
  title: 'Components/SelectDropdown',
  component: SelectDropdown,
};

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const Template = (args) => {
  const [value, setValue] = useState(options[0].value);

  return (
    <SelectDropdown
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  options,
};

export const Disabled = Template.bind({});
Disabled.args = {
  options,
  disabled: true,
};