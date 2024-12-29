import React from 'react';
import { Meta, Story } from '@storybook/react';
import VirtualizedList, { VirtualizedListProps } from './VirtualizedList';

export default {
  title: 'component/Lists/VirtualizedList',
  component: VirtualizedList,
  tags: ['autodocs'],
} as Meta;

const Template: Story<VirtualizedListProps> = (args) => <VirtualizedList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`),
  loadMoreItems: () => {},
  isLoading: false,
  hasMore: true,
};

export const LoadingMore = Template.bind({});
LoadingMore.args = {
  ...Default.args,
  isLoading: true,
};

export const EndOfList = Template.bind({});
EndOfList.args = {
  ...Default.args,
  hasMore: false,
};