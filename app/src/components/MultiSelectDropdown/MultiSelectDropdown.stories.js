import React, { useState } from 'react';
import MultiSelectDropdown from './MultiSelectDropdown';

export default {
  title: 'Components/MultiSelectDropdown',
  component: MultiSelectDropdown,
};

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const Template = (args) => {
  const [values, setValues] = useState([]);

  return (
    <MultiSelectDropdown
      {...args}
      values={values}
      onChange={(selectedOptions) => setValues(selectedOptions)}
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