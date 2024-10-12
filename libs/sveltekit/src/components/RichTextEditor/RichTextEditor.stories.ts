import RichTextEditor from './RichTextEditor.svelte';

export default {
  title: 'Components/Forms/RichTextEditor',
  component: RichTextEditor,
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text' },
    readOnly: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: RichTextEditor,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  content: '<p>Type here...</p>',
  readOnly: false,
};

export const Editing = Template.bind({});
Editing.args = {
  content: '<p>Edit this text...</p>',
  readOnly: false,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  content: '<p>This is read-only text.</p>',
  readOnly: true,
};