import React, { useState } from 'react';
import CheckboxFilter from './CheckboxFilter';

export default {
  title: 'Components/CheckboxFilter',
  component: CheckboxFilter,
};

const Template = (args) => {
  const [selectedOptions, setSelectedOptions] = useState(args.selectedOptions);

  return (
    <CheckboxFilter
      {...args}
      selectedOptions={selectedOptions}
      onChange={setSelectedOptions}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  selectedOptions: [],
};

export const PreselectedOptions = Template.bind({});
PreselectedOptions.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  selectedOptions: ['Option 2'],
};