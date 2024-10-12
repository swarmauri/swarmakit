import RichTextEditor from './RichTextEditor.svelte';

export default {
  title: 'Forms/RichTextEditor',
  component: RichTextEditor,
  argTypes: {
    content: { control: 'text' },
    readOnly: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: RichTextEditor,
  props: args,
  on: {
    input: args.onInput,
  },
});

export const Default = Template.bind({});
Default.args = {
  content: '<p>This is some editable text.</p>',
  readOnly: false,
  onInput: (content) => console.log('Rich text editor content:', content),
};

export const Editing = Template.bind({});
Editing.args = {
  content: '<p>Editing mode with this content.</p>',
  readOnly: false,
  onInput: (content) => console.log('Rich text editor content:', content),
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  content: '<p>This is read-only text.</p>',
  readOnly: true,
  onInput: (content) => console.log('Rich text editor content:', content),
};