import React from 'react';
import RichTextEditor from './RichTextEditor';

export default {
  title: 'Components/RichTextEditor',
  component: RichTextEditor,
  argTypes: {
    initialValue: { control: 'text' },
  },
};

const Template = (args) => <RichTextEditor {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialValue: '<p>Edit this text</p>',
};

export const WithInitialContent = Template.bind({});
WithInitialContent.args = {
  initialValue: '<h1>Welcome to the Editor</h1><p>This is some initial content.</p>',
};