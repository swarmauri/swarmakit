import NotificationBellIcon from './NotificationBellIcon.svelte';

export default {
  title: 'Indicators/NotificationBellIcon',
  component: NotificationBellIcon,
  argTypes: {
    hasNotifications: {
      control: { type: 'boolean' },
    },
    isDismissed: {
      control: { type: 'boolean' },
    },
  },
};

const Template = (args) => ({
  Component: NotificationBellIcon,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  hasNotifications: false,
  isDismissed: false,
};

export const NoNotifications = Template.bind({});
NoNotifications.args = {
  hasNotifications: false,
  isDismissed: false,
};

export const NewNotifications = Template.bind({});
NewNotifications.args = {
  hasNotifications: true,
  isDismissed: false,
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  hasNotifications: true,
  isDismissed: true,
};