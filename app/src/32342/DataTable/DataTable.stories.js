// DataTable.stories.js
import React from 'react';
import DataTable from './DataTable';

export default {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    columns: { control: 'object' },
    data: { control: 'object' },
  },
};

const Template = (args) => <DataTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Age', accessor: 'age' },
    { Header: 'Country', accessor: 'country' },
  ],
  data: [
    { name: 'John Doe', age: 28, country: 'USA' },
    { name: 'Jane Smith', age: 34, country: 'Canada' },
  ],
};

export const WithAdditionalData = Template.bind({});
WithAdditionalData.args = {
  columns: [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Age', accessor: 'age' },
    { Header: 'Country', accessor: 'country' },
    { Header: 'Occupation', accessor: 'occupation' },
  ],
  data: [
    { name: 'John Doe', age: 28, country: 'USA', occupation: 'Engineer' },
    { name: 'Jane Smith', age: 34, country: 'Canada', occupation: 'Designer' },
    { name: 'Sam Brown', age: 22, country: 'UK', occupation: 'Developer' },
  ],
};