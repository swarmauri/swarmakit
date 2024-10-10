import React from 'react';
import FilterChipsTags from './FilterChipsTags';

export default {
  title: 'Components/FilterChipsTags',
  component: FilterChipsTags,
};

const Template = (args) => <FilterChipsTags {...args} />;

export const Default = Template.bind({});
Default.args = {
  tags: ['Tag1', 'Tag2', 'Tag3'],
  onRemove: (tag) => alert(`Removed ${tag}`),
};

export const NoTags = Template.bind({});
NoTags.args = {
  tags: [],
  onRemove: (tag) => alert(`Removed ${tag}`),
};