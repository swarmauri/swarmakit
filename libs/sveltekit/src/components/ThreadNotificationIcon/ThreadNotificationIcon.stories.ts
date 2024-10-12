import ThreadNotificationIcon from './ThreadNotificationIcon.svelte';

export default {
  title: 'Threads/ThreadNotificationIcon',
  component: ThreadNotificationIcon,
  argTypes: {
    isEnabled: {
      control: 'boolean',
    },
    isMuted: {
      control: 'boolean',
    },
  },
};

const Template = (args) => ({
  Component: ThreadNotificationIcon,
  props: args,
});

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