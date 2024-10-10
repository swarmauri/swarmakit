import React from 'react';
import TextFormattingToolbar from './TextFormattingToolbar';

export default {
  title: 'Components/TextFormattingToolbar',
  component: TextFormattingToolbar,
  argTypes: {
    onBold: { action: 'Bold button clicked' },
    onItalic: { action: 'Italic button clicked' },
    onUnderline: { action: 'Underline button clicked' },
    className: {
      control: 'text',
      description: 'Custom CSS classes for styling',
    },
  },
};

const Template = (args) => <TextFormattingToolbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: '',
};

export const CustomClassName = Template.bind({});
CustomClassName.args = {
  className: 'custom-toolbar-class',
};