import RichTextEditor from './RichTextEditor.vue';

export default {
  title: 'Forms/RichTextEditor',
  component: RichTextEditor,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text' },
    readOnly: { control: 'boolean' },
  },
};

const Template = (args: any) => ({
  components: { RichTextEditor },
  setup() {
    return { args };
  },
  template: '<RichTextEditor v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  modelValue: '<p>This is some rich text</p>',
  readOnly: false,
};

export const Editing = Template.bind({});
Editing.args = {
  modelValue: '<p>Edit this text</p>',
  readOnly: false,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  modelValue: '<p>This text is read-only</p>',
  readOnly: true,
};