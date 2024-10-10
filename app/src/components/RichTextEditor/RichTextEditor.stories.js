import React from 'react';
import RichTextEditor from './RichTextEditor';

export default {
  title: 'Forms/RichTextEditor',
  component: RichTextEditor,
};

const Template = (args) => <RichTextEditor {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultValue: 'This is some editable text.',
  readOnly: false,
};

export const Editing = Template.bind({});
Editing.args = {
  defaultValue: 'You are currently editing this text.',
  readOnly: false,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  defaultValue: 'This text is read-only.',
  readOnly: true,
};