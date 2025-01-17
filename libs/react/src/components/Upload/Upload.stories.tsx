import React from 'react';
import { Meta, Story } from '@storybook/react';
import Upload from './Upload';

export default {
  title: 'component/Indicators/Upload',
  component: Upload,
  tags: ['autodocs'],
} as Meta;

const Template: Story<UploadProps> = (args) => <Upload {...args} />;

export const Default = Template.bind({});
Default.args = {
  status: 'uploading',
};

export const Uploading = Template.bind({});
Uploading.args = {
  status: 'uploading',
};

export const Downloading = Template.bind({});
Downloading.args = {
  status: 'downloading',
};

export const Completed = Template.bind({});
Completed.args = {
  status: 'completed',
};

export const Paused = Template.bind({});
Paused.args = {
  status: 'paused',
};

export const Failed = Template.bind({});
Failed.args = {
  status: 'failed',
};