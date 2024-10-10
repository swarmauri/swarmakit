// TypingStatus.stories.js
import React from 'react';
import TypingStatus from './TypingStatus';

export default {
  title: 'Chat/TypingStatus',
  component: TypingStatus,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <TypingStatus {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'visible',
  message: 'User is typing...',
};

export const Visible = Template.bind({});
Visible.args = {
  state: 'visible',
  message: 'User is typing...',
};

export const Hidden = Template.bind({});
Hidden.args = {
  state: 'hidden',
  message: '',
};

export const Typing = Template.bind({});
Typing.args = {
  state: 'typing',
  message: 'User is typing...',
};

export const Paused = Template.bind({});
Paused.args = {
  state: 'paused',
  message: '',
};