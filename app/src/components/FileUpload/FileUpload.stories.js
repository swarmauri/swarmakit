import React from 'react';
import FileUpload from './FileUpload';

export default {
  title: 'Forms/FileUpload',
  component: FileUpload,
  argTypes: {
    onFilesChange: { action: 'files uploaded' },
  },
};

const Template = (args) => <FileUpload {...args} />;

export const Default = Template.bind({});
Default.args = {
  multiple: false,
};

export const SingleFile = Template.bind({});
SingleFile.args = {
  multiple: false,
};

export const MultipleFiles = Template.bind({});
MultipleFiles.args = {
  multiple: true,
};

export const DragAndDrop = Template.bind({});
DragAndDrop.args = {
  multiple: true,
};

export const Progress = Template.bind({});
Progress.args = {
  multiple: true,
};