import React from 'react';
import RichTextEditor from './RichTextEditor';

export default {
  title: 'Components/RichTextEditor',
  component: RichTextEditor,
  argTypes: {
    initialValue: {
      control: 'text',
      description: 'The initial content of the editor',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the editor',
    },
    className: {
      control: 'text',
      description: 'Custom CSS classes for styling',
    },
  },
};

const Template = (args) => <RichTextEditor {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialValue: '',
  placeholder: 'Start typing...',
};

export const WithInitialContent = Template.bind({});
WithInitialContent.args = {
  initialValue: 'This is some initial content in the editor.',
  placeholder: 'Start typing...',
};

export const CustomClassName = Template.bind({});
CustomClassName.args = {
  initialValue: '',
  placeholder: 'Type your content here...',
  className: 'custom-editor-class',
};