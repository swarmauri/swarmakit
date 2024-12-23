import React from 'react';
import { Meta, Story } from '@storybook/react';
import FilterableList, { FilterableListProps } from './FilterableList';

export default {
  title: 'component/Lists/FilterableList',
  component: FilterableList,
  tags: ['autodocs'],
} as Meta;

const Template: Story<FilterableListProps> = (args) => <FilterableList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ],
};

export const FilterApplied = Template.bind({});
FilterApplied.args = {
  ...Default.args,
};

export const NoResults = Template.bind({});
NoResults.args = {
  ...Default.args,
};

export const ClearFilter = Template.bind({});
ClearFilter.args = {
  ...Default.args,
};