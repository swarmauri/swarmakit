import React, { useState } from 'react';
import SortableList from './SortableList';

export default {
  title: 'Lists/SortableList',
  component: SortableList,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => {
  const [items, setItems] = useState(args.items);
  return <SortableList {...args} items={items} onSort={setItems} />;
};

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ],
  disabled: false,
};

export const Dragging = Template.bind({});
Dragging.args = {
  items: [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ],
  disabled: false,
};

export const Sorted = Template.bind({});
Sorted.args = {
  items: [
    { id: 3, text: 'Item 3' },
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
  ],
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: [
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ],
  disabled: true,
};