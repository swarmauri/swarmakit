import FileUpload from './FileUpload.svelte';

export default {
  title: 'Components/Forms/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  argTypes: {
    multiple: { control: 'boolean' },
    progress: { control: 'number' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: FileUpload,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  multiple: false,
  progress: 0,
  disabled: false,
};

export const SingleFile = Template.bind({});
SingleFile.args = {
  multiple: false,
  progress: 0,
  disabled: false,
};

export const MultipleFiles = Template.bind({});
MultipleFiles.args = {
  multiple: true,
  progress: 0,
  disabled: false,
};

export const DragAndDrop = Template.bind({});
DragAndDrop.args = {
  multiple: true,
  progress: 0,
  disabled: false,
};

export const Progress = Template.bind({});
Progress.args = {
  multiple: true,
  progress: 50,
  disabled: false,
};