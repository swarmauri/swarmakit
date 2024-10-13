import RichTextEditor from './RichTextEditor.svelte';

export default {
  title: 'Forms/RichTextEditor',
  component: RichTextEditor,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    content: '<p>This is a rich text editor.</p>',
    readOnly: false,
  },
};

export const Editing = {
  args: {
    content: '<p>Edit this text.</p>',
    readOnly: false,
  },
};

export const ReadOnly = {
  args: {
    content: '<p>This text is read-only.</p>',
    readOnly: true,
  },
};