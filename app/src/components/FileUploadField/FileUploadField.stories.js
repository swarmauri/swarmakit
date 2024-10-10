import React from 'react';
import FileUploadField from './FileUploadField';

export default {
  title: 'Components/FileUploadField',
  component: FileUploadField,
};

const Template = (args) => (
  <FileUploadField
    {...args}
    onFileSelect={(files) => console.log(files)}
  />
);

export const Default = Template.bind({});
Default.args = {};

export const WithFileTypes = Template.bind({});
WithFileTypes.args = {
  accept: '.jpg,.png,.pdf',
};

export const MultipleFiles = Template.bind({});
MultipleFiles.args = {
  multiple: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};