import React from 'react';
import { Meta, Story } from '@storybook/react';
import DataImportDialog, { DataImportDialogProps } from './DataImportDialog';

export default {
  title: 'component/Data/DataImportDialog',
  component: DataImportDialog,
  tags: ['autodocs'],
} as Meta;

const Template: Story<DataImportDialogProps> = (args) => <DataImportDialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  onImport: async (file) => {
    console.log(`Importing file: ${file.name}`);
  },
  onClose: () => console.log('Dialog closed'),
};

export const Importing = Template.bind({});
Importing.args = {
  ...Default.args,
  onImport: async (file) => {
    console.log(`Importing file: ${file.name}`);
    return new Promise((resolve) => setTimeout(resolve, 2000));
  },
};

export const Success = Template.bind({});
Success.args = {
  ...Default.args,
  onImport: async (file) => {
    console.log(`Importing file: ${file.name}`);
    return new Promise((resolve) => setTimeout(resolve, 1000));
  },
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  onImport: async (file) => {
    console.log(`Importing file: ${file.name}`);
    throw new Error('Invalid file format');
  },
};