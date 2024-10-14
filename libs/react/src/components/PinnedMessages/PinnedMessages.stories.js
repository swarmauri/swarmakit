// PinnedMessages.stories.js
import React from 'react';
import PinnedMessages from './PinnedMessages';

export default {
  title: 'Chat/PinnedMessages',
  component: PinnedMessages,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <PinnedMessages {...args} />;

export const Default = Template.bind({});
Default.args = {
  isPinned: false,
  isVisible: false,
  message: 'This is a default message.',
};

export const Pinned = Template.bind({});
Pinned.args = {
  isPinned: true,
  isVisible: true,
  message: 'This is a pinned message.',
};

export const Unpinned = Template.bind({});
Unpinned.args = {
  isPinned: false,
  isVisible: true,
  message: 'This is an unpinned message.',
};

export const Visible = Template.bind({});
Visible.args = {
  isPinned: false,
  isVisible: true,
  message: 'This message is visible.',
};

export const Hidden = Template.bind({});
Hidden.args = {
  isPinned: false,
  isVisible: false,
  message: 'This message is hidden.',
};