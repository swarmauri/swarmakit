import React from 'react';
import AdvancedSearchFilters from './AdvancedSearchFilters';

export default {
  title: 'Components/AdvancedSearchFilters',
  component: AdvancedSearchFilters,
};

const Template = (args) => <AdvancedSearchFilters {...args} />;

export const Default = Template.bind({});
Default.args = {
  filters: [
    {
      name: 'category',
      label: 'Category',
      options: [
        { value: 'books', label: 'Books' },
        { value: 'electronics', label: 'Electronics' },
        { value: 'clothing', label: 'Clothing' },
      ],
    },
    {
      name: 'priceRange',
      label: 'Price Range',
      options: [
        { value: '0-50', label: '$0 - $50' },
        { value: '51-100', label: '$51 - $100' },
        { value: '101-200', label: '$101 - $200' },
      ],
    },
  ],
  onApplyFilters: (filters) => console.log('Applied filters:', filters),
};

export const NoFilters = Template.bind({});
NoFilters.args = {
  filters: [],
  onApplyFilters: (filters) => console.log('Applied filters:', filters),
};