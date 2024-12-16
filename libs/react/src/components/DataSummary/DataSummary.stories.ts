import React from 'react';
import { Meta, Story } from '@storybook/react';
import DataSummary, { DataSummaryProps } from './DataSummary';

export default {
  title: 'component/Data/DataSummary',
  component: DataSummary,
  tags: ['autodocs'],
} as Meta;

const Template: Story<DataSummaryProps> = (args) => <DataSummary {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [10, 20, 30, 40, 50],
  calculateSummary: (data) => ({
    total: data.reduce((acc, curr) => acc + curr, 0),
    average: data.reduce((acc, curr) => acc + curr, 0) / data.length,
    count: data.length,
  }),
};

export const SummaryCalculated = Template.bind({});
SummaryCalculated.args = {
  ...Default.args,
};

export const Error = Template.bind({});
Error.args = {
  data: [],
  calculateSummary: () => {
    throw new Error('Calculation error');
  },
};