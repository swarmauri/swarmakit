import GroupChatNotifications from './GroupChatNotifications.svelte';

export default {
  title: 'Chat/GroupChatNotifications',
  component: GroupChatNotifications,
  argTypes: {
    notificationsEnabled: { control: 'boolean' },
    muted: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: GroupChatNotifications,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  notificationsEnabled: true,
  muted: false,
};

export const Enabled = Template.bind({});
Enabled.args = {
  notificationsEnabled: true,
  muted: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  notificationsEnabled: false,
  muted: false,
};

export const Muted = Template.bind({});
Muted.args = {
  notificationsEnabled: false,
  muted: true,
};