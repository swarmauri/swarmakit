// EditableDataTable.stories.js
import React from 'react';
import EditableDataTable from './EditableDataTable';

export default {
  title: 'Components/EditableDataTable',
  component: EditableDataTable,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    columns: { control: 'object' },
    initialData: { control: 'object' },
  },
};

const Template = (args) => <EditableDataTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Age', accessor: 'age' },
    { Header: 'Country', accessor: 'country' },
  ],
  initialData: [
    { name: 'John Doe', age: 28, country: 'USA' },
    { name: 'Jane Smith', age: 34, country: 'Canada' },
  ],
};

export const WithAdditionalColumns = Template.bind({});
WithAdditionalColumns.args = {
  columns: [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Age', accessor: 'age' },
    { Header: 'Country', accessor: 'country' },
    { Header: 'Occupation', accessor: 'occupation' },
  ],
  initialData: [
    { name: 'John Doe', age: 28, country: 'USA', occupation: 'Engineer' },
    { name: 'Jane Smith', age: 34, country: 'Canada', occupation: 'Designer' },
    { name: 'Sam Brown', age: 22, country: 'UK', occupation: 'Developer' },
  ],
};