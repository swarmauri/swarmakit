import React, { useState } from 'react';
import MarkdownEditor from './MarkdownEditor';

export default {
  title: 'Components/MarkdownEditor',
  component: MarkdownEditor,
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    className: {
      control: 'text',
      description: 'Custom CSS classes for styling',
    },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value);
  return (
    <MarkdownEditor
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  value: '',
  placeholder: 'Enter your markdown here...',
  className: '',
};

export const WithInitialContent = Template.bind({});
WithInitialContent.args = {
  value: '# Hello World\nThis is a markdown editor.',
  placeholder: 'Enter your markdown here...',
  className: '',
};

export const CustomClassName = Template.bind({});
CustomClassName.args = {
  value: '',
  placeholder: 'Enter your markdown here...',
  className: 'custom-markdown-editor',
};