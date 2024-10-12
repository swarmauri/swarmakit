import FileUpload from './FileUpload.svelte';

export default {
  title: 'Forms/FileUpload',
  component: FileUpload,
  argTypes: {
    multiple: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: FileUpload,
  props: args,
  on: {
    filesChange: args.onFilesChange,
  },
});

export const Default = Template.bind({});
Default.args = {
  multiple: false,
  onFilesChange: (files) => console.log('Files selected:', files),
};

export const SingleFile = Template.bind({});
SingleFile.args = {
  multiple: false,
  onFilesChange: (files) => console.log('Single file selected:', files),
};

export const MultipleFiles = Template.bind({});
MultipleFiles.args = {
  multiple: true,
  onFilesChange: (files) => console.log('Multiple files selected:', files),
};

export const DragAndDrop = Template.bind({});
DragAndDrop.args = {
  multiple: true,
  onFilesChange: (files) => console.log('Files dropped:', files),
};

export const Progress = Template.bind({});
Progress.args = {
  multiple: false,
  onFilesChange: (files) => console.log('Files uploading:', files),
};