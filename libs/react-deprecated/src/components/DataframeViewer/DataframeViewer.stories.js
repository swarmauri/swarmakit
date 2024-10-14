// DataframeViewer.stories.js
import React from 'react';
import DataframeViewer from './DataframeViewer';

export default {
  title: 'Components/DataframeViewer',
  component: DataframeViewer,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    columns: { control: 'array' },
    data: { control: 'object' },
  },
};

const Template = (args) => <DataframeViewer {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: ['Name', 'Age', 'Occupation'],
  data: [
    { Name: 'Alice', Age: 30, Occupation: 'Engineer' },
    { Name: 'Bob', Age: 25, Occupation: 'Designer' },
    { Name: 'Charlie', Age: 35, Occupation: 'Teacher' },
  ],
};

export const WithEmptyData = Template.bind({});
WithEmptyData.args = {
  columns: ['Name', 'Age', 'Occupation'],
  data: [],
};