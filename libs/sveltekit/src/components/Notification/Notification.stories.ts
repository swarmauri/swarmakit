import Notification from './Notification.svelte';

export default {
  title: 'Overlays/Notification',
  component: Notification,
  argTypes: {
    isVisible: { control: 'boolean' },
    type: {
      control: {
        type: 'select',
        options: ['success', 'error', 'warning', 'info'],
      },
    },
    message: { control: 'text' },
  },
};

const Template = (args) => ({
  Component: Notification,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  isVisible: true,
  type: 'info',
  message: 'This is a default notification message.',
};

export const Success = Template.bind({});
Success.args = {
  isVisible: true,
  type: 'success',
  message: 'This is a success notification message.',
};

export const Error = Template.bind({});
Error.args = {
  isVisible: true,
  type: 'error',
  message: 'This is an error notification message.',
};

export const Warning = Template.bind({});
Warning.args = {
  isVisible: true,
  type: 'warning',
  message: 'This is a warning notification message.',
};

export const Info = Template.bind({});
Info.args = {
  isVisible: true,
  type: 'info',
  message: 'This is an informational notification message.',
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  isVisible: false,
  type: 'info',
  message: 'This notification has been dismissed.',
};