import React from 'react';
import { Meta, Story } from '@storybook/react';
import DataExportButton, { DataExportButtonProps } from './DataExportButton';

export default {
  title: 'component/Data/DataExportButton',
  component: DataExportButton,
  tags: ['autodocs'],
} as Meta;

const Template: Story<DataExportButtonProps> = (args) => <DataExportButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  hasData: true,
  onExport: async (format) => {
    console.log(`Exporting as ${format}`);
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
};

export const Exporting = Template.bind({});
Exporting.args = {
  ...Default.args,
  onExport: async (format) => {
    console.log(`Exporting as ${format}`);
    return new Promise((resolve) => setTimeout(resolve, 5000));
  }
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  hasData: false,
};