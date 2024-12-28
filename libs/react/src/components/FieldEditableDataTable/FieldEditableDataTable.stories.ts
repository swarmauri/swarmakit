import React from 'react';
import { Meta, Story } from '@storybook/react';
import FieldEditableDataTable, { FieldEditableDataTableProps } from './FieldEditableDataTable';

export default {
  title: 'component/Data/FieldEditableDataTable',
  component: FieldEditableDataTable,
  tags: ['autodocs'],
} as Meta;

const Template: Story<FieldEditableDataTableProps> = (args) => <FieldEditableDataTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: [
    { key: 'name', label: 'Name' },
    { key: 'description', label: 'Description', multiline: true },
  ],
  data: [
    { id: 1, name: 'Item 1', description: 'Description 1' },
    { id: 2, name: 'Item 2', description: 'Description 2' },
  ],
  onSave: async (id, key, value) => console.log(`Saving ${key} for row ${id}: ${value}`),
};

export const FieldEditing = Template.bind({});
FieldEditing.args = {
  ...Default.args,
};

export const FieldEdited = Template.bind({});
FieldEdited.args = {
  ...Default.args,
};

export const FieldSaved = Template.bind({});
FieldSaved.args = {
  ...Default.args,
  onSave: async (id, key, value) => {
    console.log(`Saving ${key} for row ${id}: ${value}`);
    return new Promise((resolve) => setTimeout(resolve, 1000));
  },
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  onSave: async () => {
    throw new Error('Save error');
  },
};