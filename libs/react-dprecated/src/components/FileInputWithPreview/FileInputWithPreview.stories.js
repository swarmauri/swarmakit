import React from 'react';
import FileInputWithPreview from './FileInputWithPreview';

export default {
  title: 'Forms/FileInputWithPreview',
  component: FileInputWithPreview,
  argTypes: {
    onFileChange: { action: 'file uploaded' },
  },
};

const Template = (args) => <FileInputWithPreview {...args} />;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  error: '',
};

export const FileUploaded = Template.bind({});
FileUploaded.args = {
  disabled: false,
  error: '',
};

export const PreviewDisplayed = Template.bind({});
PreviewDisplayed.args = {
  disabled: false,
  error: '',
};

export const Error = Template.bind({});
Error.args = {
  disabled: false,
  error: 'File type not supported.',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  error: '',
};