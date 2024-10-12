import FileUpload from './FileUpload.vue';

export default {
  title: 'Forms/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  argTypes: {
    multiple: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { FileUpload },
  setup() {
    return { args };
  },
  template: '<FileUpload v-bind="args" />',
});

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
  multiple: false,
};