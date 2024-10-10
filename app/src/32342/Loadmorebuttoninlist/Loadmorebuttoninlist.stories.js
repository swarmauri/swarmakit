import React from 'react';
import LoadMoreButtonInList from './LoadMoreButtonInList';

export default {
  title: 'Lists/LoadMoreButtonInList',
  component: LoadMoreButtonInList,
};

const Template = (args) => <LoadMoreButtonInList {...args} />;

const loadMoreMock = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(['Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10']);
  }, 2000);
});

export const Default = Template.bind({});
Default.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
  loadMoreItems: loadMoreMock,
};

export const Loading = Template.bind({});
Loading.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
  loadMoreItems: loadMoreMock,
};

export const EndOfList = Template.bind({});
EndOfList.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
  loadMoreItems: () => new Promise((resolve) => resolve([])),
};