import React from 'react';
import { Meta, Story } from '@storybook/react';
import PinnedList, { PinnedListProps } from './PinnedList';

export default {
  title: 'component/Lists/PinnedList',
  component: PinnedList,
  tags: ['autodocs'],
} as Meta;

const Template: Story<PinnedListProps> = (args) => <PinnedList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: '1', content: 'Item 1', pinned: false },
    { id: '2', content: 'Item 2', pinned: true },
    { id: '3', content: 'Item 3', pinned: false },
  ],
  onPinToggle: (id) => console.log(`Pin toggled for ${id}`),
  onSelect: (id) => console.log(`Selected ${id}`),
  selectedItemId: null,
};

export const Pinned = Template.bind({});
Pinned.args = {
  ...Default.args,
  selectedItemId: '2',
};

export const Unpinned = Template.bind({});
Unpinned.args = {
  ...Default.args,
  selectedItemId: '1',
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
  selectedItemId: '3',
};

export const Selected = Template.bind({});
Selected.args = {
  ...Default.args,
  selectedItemId: '3',
};