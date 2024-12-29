import React from 'react';
import { Meta, Story } from '@storybook/react';
import GroupChatNotifications, { GroupChatNotificationsProps } from './GroupChatNotifications';

export default {
  title: 'component/Chat/GroupChatNotifications',
  component: GroupChatNotifications,
  tags: ['autodocs'],
} as Meta;

const Template: Story<GroupChatNotificationsProps> = (args) => <GroupChatNotifications {...args} />;

export const Default = Template.bind({});
Default.args = {
  state: 'enabled',
};

export const Enabled = Template.bind({});
Enabled.args = {
  ...Default.args,
  state: 'enabled',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  state: 'disabled',
};

export const Muted = Template.bind({});
Muted.args = {
  ...Default.args,
  state: 'muted',
};