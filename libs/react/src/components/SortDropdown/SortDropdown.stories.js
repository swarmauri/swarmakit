import React, { useState } from 'react';
import SortDropdown from './SortDropdown';

export default {
  title: 'Components/SortDropdown',
  component: SortDropdown,
};

const Template = (args) => {
  const [selectedOption, setSelectedOption] = useState(args.selectedOption);

  return (
    <SortDropdown
      {...args}
      selectedOption={selectedOption}
      onChange={setSelectedOption}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  options: ['Alphabetical', 'Price: Low to High', 'Price: High to Low'],
  selectedOption: '',
};

export const PreselectedOption = Template.bind({});
PreselectedOption.args = {
  options: ['Alphabetical', 'Price: Low to High', 'Price: High to Low'],
  selectedOption: 'Price: Low to High',
};