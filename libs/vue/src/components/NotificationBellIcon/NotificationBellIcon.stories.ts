import NotificationBellIcon from './NotificationBellIcon.vue';

export default {
  title: 'Indicators/NotificationBellIcon',
  component: NotificationBellIcon,
  tags: ['autodocs'],
  argTypes: {
    hasNotifications: {
      control: { type: 'boolean' },
      description: 'Indicates if there are new notifications',
    },
  },
};

const Template = (args: any) => ({
  components: { NotificationBellIcon },
  setup() {
    return { args };
  },
  template: '<NotificationBellIcon v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  hasNotifications: false,
};

export const NoNotifications = Template.bind({});
NoNotifications.args = {
  hasNotifications: false,
};

export const NewNotifications = Template.bind({});
NewNotifications.args = {
  hasNotifications: true,
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  hasNotifications: false,
};