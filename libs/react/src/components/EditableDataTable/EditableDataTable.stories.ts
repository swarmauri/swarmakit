import React from 'react';
import { Meta, Story } from '@storybook/react';
import EditableDataTable, { EditableDataTableProps } from './EditableDataTable';

export default {
  title: 'component/Data/EditableDataTable',
  component: EditableDataTable,
  tags: ['autodocs'],
} as Meta;

const columns = [
  { key: 'name', header: 'Name', inputType: 'text', width: '30%', align: 'left' },
  { key: 'description', header: 'Description', inputType: 'textarea', width: '50%', align: 'left' },
  { key: 'status', header: 'Status', inputType: 'text', width: '20%', align: 'center' },
];

const data = [
  { name: 'Task 1', description: 'Description for task 1', status: 'Pending' },
  { name: 'Task 2', description: 'Description for task 2', status: 'In Progress' },
  { name: 'Task 3', description: 'Description for task 3', status: 'Completed' },
];

const Template: Story<EditableDataTableProps> = (args) => <EditableDataTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  data,
  columns,
  onRowSave: (rowIndex, updatedRow) => console.log(`Row ${rowIndex} saved: ${JSON.stringify(updatedRow)}`),
  onRowDelete: (rowIndex) => console.log(`Row ${rowIndex} deleted`),
  onAddRow: () => console.log(`New row added`),
};

export const Editing = Template.bind({});
Editing.args = {
  ...Default.args,
};

export const RowSelected = Template.bind({});
RowSelected.args = {
  ...Default.args,
};

export const RowSaved = Template.bind({});
RowSaved.args = {
  ...Default.args,
};

export const RowDeleted = Template.bind({});
RowDeleted.args = {
  ...Default.args,
};