import React from 'react';
import SortableList from './SortableList';

export default {
  title: 'Lists/SortableList',
  component: SortableList,
};

const Template = (args) => <SortableList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: '1', content: 'Item 1' },
    { id: '2', content: 'Item 2' },
    { id: '3', content: 'Item 3' },
  ],
};

export const Dragging = Template.bind({});
Dragging.args = {
  ...Default.args,
};

export const Sorted = Template.bind({});
Sorted.args = {
  items: [
    { id: '1', content: 'Item 3' },
    { id: '2', content: 'Item 1' },
    { id: '3', content: 'Item 2' },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  isDisabled: true,
};