import React from 'react';
import LoadmorebuttoninList from './LoadmorebuttoninList';

export default {
  title: 'Lists/LoadmorebuttoninList',
  component: LoadmorebuttoninList,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <LoadmorebuttoninList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
  loadMore: () => new Promise((resolve) => setTimeout(resolve, 2000)),
  hasMore: true,
};

export const Loading = Template.bind({});
Loading.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
  loadMore: () => new Promise((resolve) => setTimeout(resolve, 2000)),
  hasMore: true,
};

export const EndOfList = Template.bind({});
EndOfList.args = {
  items: ['Item 1', 'Item 2', 'Item 3'],
  loadMore: () => new Promise((resolve) => setTimeout(resolve, 2000)),
  hasMore: false,
};