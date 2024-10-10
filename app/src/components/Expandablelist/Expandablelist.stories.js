import React from 'react';
import ExpandableList from './ExpandableList';

export default {
  title: 'Lists/ExpandableList',
  component: ExpandableList,
};

const Template = (args) => <ExpandableList {...args} />;

const items = [
  { title: 'Item 1', content: 'Content for item 1' },
  { title: 'Item 2', content: 'Content for item 2' },
  { title: 'Item 3', content: 'Content for item 3' },
];

export const Default = Template.bind({});
Default.args = {
  items,
};

export const ItemExpanded = Template.bind({});
ItemExpanded.args = {
  items,
  initialExpandedIndex: 0,
};

export const ItemCollapsed = Template.bind({});
ItemCollapsed.args = {
  items,
};

export const Hover = Template.bind({});
Hover.args = {
  items,
};

export const Selected = Template.bind({});
Selected.args = {
  items,
};