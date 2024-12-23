import React from 'react';
import { Meta, Story } from '@storybook/react';
import RichTextEditor from './RichTextEditor';

export default {
  title: 'component/Forms/RichTextEditor',
  component: RichTextEditor,
  tags: ['autodocs'],
} as Meta;

const Template: Story = (args) => <RichTextEditor {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialContent: 'Start typing...',
  readOnly: false,
  onContentChange: (content: string) => console.log(content),
};

export const Editing = Template.bind({});
Editing.args = {
  ...Default.args,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  ...Default.args,
  readOnly: true,
};