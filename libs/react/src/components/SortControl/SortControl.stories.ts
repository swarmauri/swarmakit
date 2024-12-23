import React from 'react';
import { Meta, Story } from '@storybook/react';
import SortControl, { SortControlProps } from './SortControl';

export default {
  title: 'component/Data/SortControl',
  component: SortControl,
  tags: ['autodocs'],
} as Meta;

const Template: Story<SortControlProps> = (args) => <SortControl {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: ['Name', 'Age', 'Date'],
  onSortChange: (column, direction) => console.log(`Sorting ${column} in ${direction} order`),
};

export const Ascending = Template.bind({});
Ascending.args = {
  ...Default.args,
};

export const Descending = Template.bind({});
Descending.args = {
  ...Default.args,
};

export const Disabled = Template.bind({});
Disabled.args = {
  columns: [],
  onSortChange: (column, direction) => console.log(`Sorting ${column} in ${direction} order`),
};