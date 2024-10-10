import React from 'react';
import GroupedList from './GroupedList';

export default {
  title: 'Lists/GroupedList',
  component: GroupedList,
};

const Template = (args) => <GroupedList {...args} />;

export const Default = Template.bind({});
Default.args = {
  groups: {
    Fruits: ['Apple', 'Banana', 'Cherry'],
    Vegetables: ['Carrot', 'Lettuce', 'Spinach'],
  },
};

export const GroupExpanded = Template.bind({});
GroupExpanded.args = {
  groups: {
    Fruits: ['Apple', 'Banana', 'Cherry'],
    Vegetables: ['Carrot', 'Lettuce', 'Spinach'],
  },
};

export const GroupCollapsed = Template.bind({});
GroupCollapsed.args = {
  groups: {
    Fruits: ['Apple', 'Banana', 'Cherry'],
    Vegetables: ['Carrot', 'Lettuce', 'Spinach'],
  },
};

export const ItemHover = Template.bind({});
ItemHover.args = {
  groups: {
    Fruits: ['Apple', 'Banana', 'Cherry'],
    Vegetables: ['Carrot', 'Lettuce', 'Spinach'],
  },
};

export const ItemSelected = Template.bind({});
ItemSelected.args = {
  groups: {
    Fruits: ['Apple', 'Banana', 'Cherry'],
    Vegetables: ['Carrot', 'Lettuce', 'Spinach'],
  },
};