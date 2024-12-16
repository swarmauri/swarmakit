import React from 'react';
import { Meta, Story } from '@storybook/react';
import ThreadNotificationIcon, { ThreadNotificationIconProps } from './ThreadNotificationIcon';

export default {
  title: 'component/Threads/ThreadNotificationIcon',
  component: ThreadNotificationIcon,
  tags: ['autodocs'],
} as Meta;

const Template: Story<ThreadNotificationIconProps> = (args) => <ThreadNotificationIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  enabled: true,
  muted: false,
};

export const Enabled = Template.bind({});
Enabled.args = {
  enabled: true,
  muted: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  enabled: false,
  muted: false,
};

export const Muted = Template.bind({});
Muted.args = {
  enabled: true,
  muted: true,
};