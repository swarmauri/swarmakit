import React from 'react';
import { Meta, Story } from '@storybook/react';
import DataFilterPanel, { DataFilterPanelProps } from './DataFilterPanel';

export default {
  title: 'component/Data/DataFilterPanel',
  component: DataFilterPanel,
  tags: ['autodocs'],
} as Meta;

const filters = [
  { type: 'text', label: 'Name' },
  { type: 'dropdown', label: 'Status', options: ['Pending', 'In Progress', 'Completed'] },
  { type: 'date', label: 'Start Date' },
  { type: 'date', label: 'End Date' },
];

const Template: Story<DataFilterPanelProps> = (args) => <DataFilterPanel {...args} />;

export const Default = Template.bind({});
Default.args = {
  filters,
  onApplyFilters: (activeFilters) => console.log(`Filters applied: ${JSON.stringify(activeFilters)}`),
  onClearFilters: () => console.log(`Filters cleared`),
};

export const FilterApplied = Template.bind({});
FilterApplied.args = {
  ...Default.args,
};

export const FilterCleared = Template.bind({});
FilterCleared.args = {
  ...Default.args,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};