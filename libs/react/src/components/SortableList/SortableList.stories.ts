import React from 'react';
import { Meta, Story } from '@storybook/react';
import SortableList, { SortableListProps } from './SortableList';

export default {
  title: 'component/Lists/SortableList',
  component: SortableList,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SortableListProps> = (args) => <SortableList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
};

export const Dragging = Template.bind({});
Dragging.args = {
  ...Default.args,
};

export const Sorted = Template.bind({});
Sorted.args = {
  items: ['Item 2', 'Item 1', 'Item 4', 'Item 3'],
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  disabled: true,
};