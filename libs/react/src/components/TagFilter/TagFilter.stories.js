import React from 'react';
import TagFilter from './TagFilter';

export default {
  title: 'UI Layout/TagFilter',
  component: TagFilter,
  argTypes: {
    tag: { control: 'object' },
    active: { control: 'boolean' },
    onAdd: { action: 'added' },
    onRemove: { action: 'removed' },
  },
};

const Template = (args) => <TagFilter {...args} />;

export const Default = Template.bind({});
Default.args = {
  tag: { name: 'Example Tag' },
  active: false,
};

export const Added = Template.bind({});
Added.args = {
  tag: { name: 'Example Tag' },
  active: true,
};

export const Removed = Template.bind({});
Removed.args = {
  tag: { name: 'Example Tag' },
  active: false,
};

export const Active = Template.bind({});
Active.args = {
  tag: { name: 'Active Tag' },
  active: true,
};

export const Inactive = Template.bind({});
Inactive.args = {
  tag: { name: 'Inactive Tag' },
  active: false,
};