// FileUploader.stories.js
import React from 'react';
import FileUploader from './FileUploader';

export default {
  title: 'Components/FileUploader',
  component: FileUploader,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onFileSelect: { action: 'file selected' },
    accept: { control: 'text' },
  },
};

const Template = (args) => <FileUploader {...args} />;

export const Default = Template.bind({});
Default.args = {
  accept: 'image/*',
};

export const WithSpecificFileType = Template.bind({});
WithSpecificFileType.args = {
  accept: '.pdf',
};