import ToastNotifications from './ToastNotifications.svelte';
import type { ToastType } from './ToastNotifications.svelte';

export default {
  title: 'Indicators/ToastNotifications',
  component: ToastNotifications,
  argTypes: {
    notifications: {
      control: 'object',
    },
  },
};

const Template = (args) => ({
  Component: ToastNotifications,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  notifications: [
    { message: 'This is an info message.', type: ToastType.Info },
    { message: 'This is a success message.', type: ToastType.Success },
    { message: 'This is a warning message.', type: ToastType.Warning },
    { message: 'This is an error message.', type: ToastType.Error },
  ],
};

export const Success = Template.bind({});
Success.args = {
  notifications: [
    { message: 'This is a success message.', type: ToastType.Success }
  ],
};

export const Error = Template.bind({});
Error.args = {
  notifications: [
    { message: 'This is an error message.', type: ToastType.Error }
  ],
};

export const Warning = Template.bind({});
Warning.args = {
  notifications: [
    { message: 'This is a warning message.', type: ToastType.Warning }
  ],
};

export const Info = Template.bind({});
Info.args = {
  notifications: [
    { message: 'This is an info message.', type: ToastType.Info }
  ],
};

export const Dismissed = Template.bind({});
Dismissed.args = {
  notifications: [
    { message: 'This message has been dismissed.', type: ToastType.Dismissed }
  ],
};