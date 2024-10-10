import React from 'react';
import Upload from './Upload';

export default {
  title: 'Indicators/Upload',
  component: Upload,
};

const Template = (args) => <Upload {...args} />;

export const Default = Template.bind({});
Default.args = {
  filename: 'example.txt',
  status: 'uploading',
};

export const Uploading = Template.bind({});
Uploading.args = {
  filename: 'example.txt',
  status: 'uploading',
};

export const Downloading = Template.bind({});
Downloading.args = {
  filename: 'example.txt',
  status: 'downloading',
};

export const Completed = Template.bind({});
Completed.args = {
  filename: 'example.txt',
  status: 'completed',
};

export const Paused = Template.bind({});
Paused.args = {
  filename: 'example.txt',
  status: 'paused',
};

export const Failed = Template.bind({});
Failed.args = {
  filename: 'example.txt',
  status: 'failed',
};