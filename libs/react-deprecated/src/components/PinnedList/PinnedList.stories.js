import React, { useState } from 'react';
import PinnedList from './PinnedList';

export default {
  title: 'Lists/PinnedList',
  component: PinnedList,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => {
  const [selectedItem, setSelectedItem] = useState(args.selectedItem);
  return <PinnedList {...args} selectedItem={selectedItem} onSelect={setSelectedItem} />;
};

export const Default = Template.bind({});
Default.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  pinnedItems: [],
  selectedItem: '',
};

export const Pinned = Template.bind({});
Pinned.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  pinnedItems: ['Item 2'],
  selectedItem: '',
};

export const Unpinned = Template.bind({});
Unpinned.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  pinnedItems: [],
  selectedItem: '',
};

export const Hover = Template.bind({});
Hover.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  pinnedItems: [],
  selectedItem: '',
};

export const Selected = Template.bind({});
Selected.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  pinnedItems: [],
  selectedItem: 'Item 3',
};