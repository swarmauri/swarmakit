import React from 'react';
import { within, userEvent } from '@storybook/testing-library';
import FilterableList from './FilterableList';

export default {
  title: 'Lists/FilterableList',
  component: FilterableList,
};

const Template = (args) => <FilterableList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { title: 'Apple' },
    { title: 'Banana' },
    { title: 'Cherry' },
  ],
};

export const FilterApplied = Template.bind({});
FilterApplied.args = {
  items: [
    { title: 'Apple' },
    { title: 'Banana' },
    { title: 'Cherry' },
  ],
};
FilterApplied.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const input = await canvas.getByPlaceholderText('Filter items...');
  await userEvent.type(input, 'Banana');
};

export const NoResults = Template.bind({});
NoResults.args = {
  items: [
    { title: 'Apple' },
    { title: 'Banana' },
    { title: 'Cherry' },
  ],
};
NoResults.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const input = await canvas.getByPlaceholderText('Filter items...');
  await userEvent.type(input, 'Orange');
};

export const ClearFilter = Template.bind({});
ClearFilter.args = {
  items: [
    { title: 'Apple' },
    { title: 'Banana' },
    { title: 'Cherry' },
  ],
};
ClearFilter.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  const input = await canvas.getByPlaceholderText('Filter items...');
  await userEvent.type(input, 'Banana');
  await userEvent.clear(input);
};