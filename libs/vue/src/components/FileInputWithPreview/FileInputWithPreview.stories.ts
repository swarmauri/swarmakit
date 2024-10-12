import FileInputWithPreview from './FileInputWithPreview.vue';

export default {
  title: 'Forms/FileInputWithPreview',
  component: FileInputWithPreview,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    error: { control: 'text' },
  },
};

const Template = (args: any) => ({
  components: { FileInputWithPreview },
  setup() {
    return { args };
  },
  template: '<FileInputWithPreview v-bind="args" />',
});

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
  error: 'File format not supported.',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  error: '',
};