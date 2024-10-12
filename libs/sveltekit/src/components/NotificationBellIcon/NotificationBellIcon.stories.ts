import NotificationBellIcon from './NotificationBellIcon.svelte';

export default {
  title: 'Components/Indicators/NotificationBellIcon',
  component: NotificationBellIcon,
  tags: ['autodocs'],
  argTypes: {
    hasNotifications: { control: 'boolean' },
    dismissed: { control: 'boolean' },
  },
};

const Template = (args) => ({
  Component: NotificationBellIcon,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  hasNotifications: false,
  dismissed: false,
};

export const NoNotifications = Template.bind({});
NoNotifications.args = {
  hasNotifications: false,
  dismissed: false,
};

export const NewNotifications = Template.bind({});
NewNotifications.args = {
  hasNotifications: true,
  dismissed: false,
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  hasNotifications: true,
  dismissed: true,
};