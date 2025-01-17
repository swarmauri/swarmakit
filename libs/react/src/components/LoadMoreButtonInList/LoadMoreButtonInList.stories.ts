import React from 'react';
import { Meta, Story } from '@storybook/react';
import LoadMoreButtonInList, { LoadMoreButtonInListProps } from './LoadMoreButtonInList';

export default {
  title: 'component/Lists/LoadMoreButtonInList',
  component: LoadMoreButtonInList,
  tags: ['autodocs'],
} as Meta;

const Template: Story<LoadMoreButtonInListProps> = (args) => <LoadMoreButtonInList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
  loadMoreItems: async () => ['Item 4', 'Item 5'],
  endOfListText: 'No more items to load.',
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  loadMoreItems: async () => new Promise((resolve) => setTimeout(() => resolve(['Item 4', 'Item 5']), 2000)),
};

export const EndOfList = Template.bind({});
EndOfList.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
  loadMoreItems: async () => [],
  endOfListText: 'No more items to load.',
};