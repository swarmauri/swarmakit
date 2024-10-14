import RichTextEditor from './RichTextEditor.vue';

export default {
  component: RichTextEditor,
  title: 'component/Forms/RichTextEditor',
  tags: ['autodocs'],
  argTypes: {
    readonly: { control: { type: 'boolean' } },
  },
};

const Template = (args) => ({
  components: { RichTextEditor },
  setup() {
    return { args };
  },
  template: '<RichTextEditor v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  readonly: false,
};

export const Editing = Template.bind({});
Editing.args = {
  readonly: false,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  readonly: true,
};