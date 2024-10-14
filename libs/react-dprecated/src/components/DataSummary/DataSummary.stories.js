import React from 'react';
import DataSummary from './DataSummary';

export default {
  title: 'UI Layout/DataSummary',
  component: DataSummary,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    loading: { control: 'boolean' },
  },
};

const Template = (args) => <DataSummary {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Data Summary',
  content: 'Here is a summary of the data.',
  loading: false,
};

export const Loading = Template.bind({});
Loading.args = {
  title: 'Data Summary',
  content: '',
  loading: true,
};

export const Rendered = Template.bind({});
Rendered.args = {
  title: 'Data Summary',
  content: 'This is the rendered content of the data summary.',
  loading: false,
};

export const Empty = Template.bind({});
Empty.args = {
  title: 'Data Summary',
  content: '',
  loading: false,
};