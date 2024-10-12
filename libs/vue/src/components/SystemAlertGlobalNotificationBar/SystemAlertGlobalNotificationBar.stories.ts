import SystemAlertGlobalNotificationBar from './SystemAlertGlobalNotificationBar.vue';

export default {
  title: 'Indicators/SystemAlertGlobalNotificationBar',
  component: SystemAlertGlobalNotificationBar,
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: { type: 'text' },
      description: 'The message to display in the notification bar',
    },
    type: {
      control: { type: 'select', options: ['success', 'error', 'warning', 'info'] },
      description: 'The type of notification to display',
    },
  },
};

const Template = (args: any) => ({
  components: { SystemAlertGlobalNotificationBar },
  setup() {
    return { args };
  },
  template: '<SystemAlertGlobalNotificationBar v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  message: 'This is a default notification.',
  type: 'info',
};

export const Success = Template.bind({});
Success.args = {
  message: 'Operation completed successfully!',
  type: 'success',
};

export const Error = Template.bind({});
Error.args = {
  message: 'There was an error processing your request.',
  type: 'error',
};

export const Warning = Template.bind({});
Warning.args = {
  message: 'Warning: Please check your input.',
  type: 'warning',
};

export const Info = Template.bind({});
Info.args = {
  message: 'For your information, changes have been saved.',
  type: 'info',
};