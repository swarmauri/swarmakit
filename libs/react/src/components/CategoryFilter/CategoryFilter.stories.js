import React from 'react';
import CategoryFilter from './CategoryFilter';

export default {
  title: 'Components/CategoryFilter',
  component: CategoryFilter,
};

const Template = (args) => <CategoryFilter {...args} />;

export const Default = Template.bind({});
Default.args = {
  categories: ['Technology', 'Health', 'Finance', 'Education', 'Entertainment'],
  onCategorySelect: (category) => console.log('Selected category:', category),
};

export const NoCategories = Template.bind({});
NoCategories.args = {
  categories: [],
  onCategorySelect: (category) => console.log('Selected category:', category),
};