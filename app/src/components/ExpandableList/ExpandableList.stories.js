import React from 'react';
import ExpandableList from './ExpandableList';

export default {
  title: 'Lists/ExpandableList',
  component: ExpandableList,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <ExpandableList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { title: 'Item 1', detail: 'Detail for Item 1' },
    { title: 'Item 2', detail: 'Detail for Item 2' },
    { title: 'Item 3', detail: 'Detail for Item 3' },
  ],
};

export const ItemExpanded = Template.bind({});
ItemExpanded.args = {
  items: [
    { title: 'Item 1', detail: 'Detail for Item 1' },
    { title: 'Item 2', detail: 'Detail for Item 2' },
    { title: 'Item 3', detail: 'Detail for Item 3' },
  ],
  expandedIndex: 1,
};

export const ItemCollapsed = Template.bind({});
ItemCollapsed.args = {
  items: [
    { title: 'Item 1', detail: 'Detail for Item 1' },
    { title: 'Item 2', detail: 'Detail for Item 2' },
    { title: 'Item 3', detail: 'Detail for Item 3' },
  ],
  expandedIndex: null,
};

export const Hover = Template.bind({});
Hover.args = {
  items: [
    { title: 'Item 1', detail: 'Detail for Item 1' },
    { title: 'Item 2', detail: 'Detail for Item 2' },
    { title: 'Item 3', detail: 'Detail for Item 3' },
  ],
};

export const Selected = Template.bind({});
Selected.args = {
  items: [
    { title: 'Item 1', detail: 'Detail for Item 1' },
    { title: 'Item 2', detail: 'Detail for Item 2' },
    { title: 'Item 3', detail: 'Detail for Item 3' },
  ],
  selectedIndex: 0,
};