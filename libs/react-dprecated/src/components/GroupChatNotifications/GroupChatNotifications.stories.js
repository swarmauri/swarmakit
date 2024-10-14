// GroupChatNotifications.stories.js
import React from 'react';
import GroupChatNotifications from './GroupChatNotifications';

export default {
  title: 'Chat/GroupChatNotifications',
  component: GroupChatNotifications,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <GroupChatNotifications {...args} />;

export const Default = Template.bind({});
Default.args = {
  isEnabled: true,
  isMuted: false,
};

export const Enabled = Template.bind({});
Enabled.args = {
  isEnabled: true,
  isMuted: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  isEnabled: false,
  isMuted: false,
};

export const Muted = Template.bind({});
Muted.args = {
  isEnabled: true,
  isMuted: true,
};