import SystemAlertGlobalNotificationBar from './SystemAlertGlobalNotificationBar.svelte';
import type { AlertType } from './SystemAlertGlobalNotificationBar.svelte';

export default {
  title: 'Indicators/SystemAlertGlobalNotificationBar',
  component: SystemAlertGlobalNotificationBar,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: Object.values(AlertType),
      },
    },
    message: {
      control: 'text',
    },
    isVisible: {
      control: 'boolean',
    },
  },
};

const Template = (args) => ({
  Component: SystemAlertGlobalNotificationBar,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  type: AlertType.Info,
  message: 'This is an information message.',
  isVisible: true,
};

export const Success = Template.bind({});
Success.args = {
  type: AlertType.Success,
  message: 'Operation completed successfully.',
  isVisible: true,
};

export const Error = Template.bind({});
Error.args = {
  type: AlertType.Error,
  message: 'An error has occurred.',
  isVisible: true,
};

export const Warning = Template.bind({});
Warning.args = {
  type: AlertType.Warning,
  message: 'Please be aware of this warning.',
  isVisible: true,
};

export const Info = Template.bind({});
Info.args = {
  type: AlertType.Info,
  message: 'This is an information message.',
  isVisible: true,
};