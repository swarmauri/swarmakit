import React from 'react';
import TagFilter from './TagFilter';

export default {
  title: 'Components/TagFilter',
  component: TagFilter,
};

const Template = (args) => <TagFilter {...args} />;

export const Default = Template.bind({});
Default.args = {
  tags: ['JavaScript', 'React', 'CSS', 'HTML', 'Node.js'],
  onTagSelect: (tag) => console.log('Selected tag:', tag),
};

export const NoTags = Template.bind({});
NoTags.args = {
  tags: [],
  onTagSelect: (tag) => console.log('Selected tag:', tag),
};