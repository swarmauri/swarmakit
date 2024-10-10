import React, { useState } from 'react';
import SearchBar from './SearchBar';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
};

const Template = (args) => {
  const [value, setValue] = useState('');
  const handleSearch = () => {
    alert(`Searching for: ${value}`);
  };

  return (
    <SearchBar
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onSearch={handleSearch}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search...',
};

export const WithCustomPlaceholder = Template.bind({});
WithCustomPlaceholder.args = {
  placeholder: 'Type your query here...',
};