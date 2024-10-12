import FileInputWithPreview from './FileInputWithPreview.svelte';

export default {
  title: 'Components/Forms/FileInputWithPreview',
  component: FileInputWithPreview,
  tags: ['autodocs'],
  argTypes: {
    file: { control: 'object' },
    previewUrl: { control: 'text' },
    errorMessage: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: FileInputWithPreview,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  file: null,
  previewUrl: '',
  errorMessage: '',
  disabled: false,
};

export const FileUploaded = Template.bind({});
FileUploaded.args = {
  file: new File(['sample'], 'sample.png', { type: 'image/png' }),
  previewUrl: 'sample-preview-url',
  errorMessage: '',
  disabled: false,
};

export const PreviewDisplayed = Template.bind({});
PreviewDisplayed.args = {
  file: null,
  previewUrl: 'sample-preview-url',
  errorMessage: '',
  disabled: false,
};

export const Error = Template.bind({});
Error.args = {
  file: null,
  previewUrl: '',
  errorMessage: 'Error uploading file',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  file: null,
  previewUrl: '',
  errorMessage: '',
  disabled: true,
};