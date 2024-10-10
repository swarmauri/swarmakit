import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import Loadmorebuttoninlist from './Loadmorebuttoninlist';

export default {
  title: 'Lists/Loadmorebuttoninlist',
  component: Loadmorebuttoninlist,
};

const Template = (args) => <Loadmorebuttoninlist {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
  loadMoreItems: async () => ['Item 6', 'Item 7', 'Item 8'],
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
};
Loading.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const loadMoreButton = await canvas.getByText('Load More');
  await userEvent.click(loadMoreButton);
};

export const EndOfList = Template.bind({});
EndOfList.args = {
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
  loadMoreItems: async () => [],
};
EndOfList.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const loadMoreButton = await canvas.getByText('Load More');
  await userEvent.click(loadMoreButton);
};