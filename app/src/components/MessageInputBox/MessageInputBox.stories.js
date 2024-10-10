// MessageInputBox.stories.js
import React, { useState } from 'react';
import MessageInputBox from './MessageInputBox';

export default {
  title: 'Chat/MessageInputBox',
  component: MessageInputBox,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value);

  return (
    <MessageInputBox
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onFocus={args.onFocus}
      onBlur={args.onBlur}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  state: 'unfocused',
  value: '',
  onFocus: () => {},
  onBlur: () => {},
};

export const Focused = Template.bind({});
Focused.args = {
  state: 'focused',
  value: '',
  onFocus: () => {},
  onBlur: () => {},
};

export const Unfocused = Template.bind({});
Unfocused.args = {
  state: 'unfocused',
  value: '',
  onFocus: () => {},
  onBlur: () => {},
};

export const Typing = Template.bind({});
Typing.args = {
  state: 'typing',
  value: 'Hello, World!',
  onFocus: () => {},
  onBlur: () => {},
};

export const Empty = Template.bind({});
Empty.args = {
  state: 'empty',
  value: '',
  onFocus: () => {},
  onBlur: () => {},
};