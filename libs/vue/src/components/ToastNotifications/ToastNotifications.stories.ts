import ToastNotifications from './ToastNotifications.vue';

export default {
  title: 'Indicators/ToastNotifications',
  component: ToastNotifications,
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: { type: 'text' },
      description: 'Notification message to be displayed',
    },
    type: {
      control: { type: 'select', options: ['success', 'error', 'warning', 'info'] },
      description: 'Type of the notification',
    },
  },
};

const Template = (args: any) => ({
  components: { ToastNotifications },
  setup() {
    return { args };
  },
  template: '<ToastNotifications v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  message: 'This is a default notification',
  type: 'info',
};

export const Success = Template.bind({});
Success.args = {
  message: 'Operation completed successfully!',
  type: 'success',
};

export const Error = Template.bind({});
Error.args = {
  message: 'An error occurred!',
  type: 'error',
};

export const Warning = Template.bind({});
Warning.args = {
  message: 'This is a warning message!',
  type: 'warning',
};

export const Info = Template.bind({});
Info.args = {
  message: 'This is an informational message!',
  type: 'info',
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  message: 'This notification will be dismissed.',
  type: 'info',
};