import React from 'react';
import Upload from './Upload';

export default {
  title: 'Indicators/Upload',
  component: Upload,
};

const Template = (args) => <Upload {...args} />;

export const Default = Template.bind({});
Default.args = {
  status: 'uploading',
  message: 'Uploading...',
};

export const Uploading = Template.bind({});
Uploading.args = {
  status: 'uploading',
  message: 'Uploading...',
};

export const Downloading = Template.bind({});
Downloading.args = {
  status: 'downloading',
  message: 'Downloading...',
};

export const Completed = Template.bind({});
Completed.args = {
  status: 'completed',
  message: 'Upload completed!',
};

export const Paused = Template.bind({});
Paused.args = {
  status: 'paused',
  message: 'Upload paused.',
};

export const Failed = Template.bind({});
Failed.args = {
  status: 'failed',
  message: 'Upload failed. Please try again.',
};