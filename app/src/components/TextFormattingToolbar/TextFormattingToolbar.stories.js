import React from 'react';
import TextFormattingToolbar from './TextFormattingToolbar';

export default {
  title: 'Components/TextFormattingToolbar',
  component: TextFormattingToolbar,
};

const Template = (args) => <TextFormattingToolbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  onBold: () => alert('Bold formatting applied'),
  onItalic: () => alert('Italic formatting applied'),
  onUnderline: () => alert('Underline formatting applied'),
};