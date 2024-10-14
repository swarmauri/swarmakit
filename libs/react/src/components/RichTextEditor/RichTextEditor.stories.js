import React from 'react';
import RichTextEditor from './RichTextEditor';

export default {
  title: 'Forms/RichTextEditor',
  component: RichTextEditor,
  argTypes: {
    onChange: { action: 'content changed' },
  },
};

const Template = (args) => <RichTextEditor {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'This is a rich text editor. You can edit this content.',
  readOnly: false,
};

export const Editing = Template.bind({});
Editing.args = {
  content: 'Start typing here...',
  readOnly: false,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  content: 'This content is read-only and cannot be edited.',
  readOnly: true,
};